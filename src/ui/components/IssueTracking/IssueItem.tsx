import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { IssueProps } from '../../../lib/type/IssueProps';
import { AiOutlineClose } from 'react-icons/ai';
import { StateFilter } from '../../../api/issueStateFilter';
import { getAllIssueData, updateIssue } from '../../../api/localStorage';
import { useSetRecoilState } from 'recoil';
import { issueData } from '../../../recoil/atom';

interface IssueItemProps {
  issueState: string;
  handleOpenCreateModal: (issueState: string) => void;
  handleOpenEditModal: (issue: IssueProps) => void;
  issues: IssueProps[];
  onDelete: any;
  draggedItem: React.MutableRefObject<IssueProps | null>;
  dropPoint: React.MutableRefObject<IssueProps | null>;
}

const IssueItem = ({
  issueState,
  handleOpenCreateModal,
  handleOpenEditModal,
  issues,
  onDelete,
  draggedItem,
  dropPoint,
}: IssueItemProps) => {
  const handleCreateClick = () => {
    handleOpenCreateModal(issueState);
  };

  const setIssueList = useSetRecoilState(issueData);

  const dropPointState = useRef<string | null>(null);

  const dragStart = (issue: IssueProps) => {
    draggedItem.current! = issue;
  };

  const dragOverState = (e: React.DragEvent<HTMLDivElement>, issueState: string) => {
    e.preventDefault();
    dropPointState.current = issueState;
  };

  const dragOverOrderNumber = (e: React.DragEvent<HTMLDivElement>, item: IssueProps) => {
    dropPoint.current = item;
  };

  const drop = () => {
    const copy = {
      ...draggedItem.current!,
      state: dropPointState.current!,
      orderNumber: dropPoint.current!.orderNumber + 1,
    };
    updateIssue(copy);
    const res = getAllIssueData();
    setIssueList(res);
  };

  return (
    <Container
      onDragOver={(e) => dragOverState(e, issueState)}
      // onDragEnter={(e) => dragOverState(e, issueState)}
      onDrop={(e) => drop()}
    >
      <Header>
        <Title>{issueState}</Title>
        <PlusBox onClick={handleCreateClick}>
          <FaPlus />
        </PlusBox>
      </Header>
      <IssueContainer>
        {StateFilter(issues, issueState).map((issue) => (
          <Issue
            key={issue.id}
            draggable={true}
            onDragStart={() => dragStart(issue)}
            onDragOver={(e) => dragOverOrderNumber(e, issue)}
            onDrop={(e) => drop()}
          >
            <IssueBox
              onClick={() => {
                handleOpenEditModal(issue);
              }}
            >
              <div>{issue.title}</div>
              <div>{issue.manager}</div>
            </IssueBox>
            <CloseBox onClick={() => onDelete(issue)}>
              <AiOutlineClose color="#cdcdcd" />
            </CloseBox>
          </Issue>
        ))}
      </IssueContainer>
    </Container>
  );
};

export default IssueItem;

const Container = styled.div`
  width: 300px;
  height: 560px;
  background-color: #f6f6f6;
`;

const Header = styled.div`
  width: 270px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 20px 10px 20px 15px;
`;

const Title = styled.h3`
  width: 70px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff1ba;
  border-radius: 8px;
  padding: 5px;
`;

const PlusBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ababab;
  cursor: pointer;
`;

const IssueContainer = styled.div`
  width: 100%;
  height: 470px;
  overflow-y: auto;
`;

const Issue = styled.div`
  width: 270px;
  height: 70px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fffdfd;
  box-shadow: 5px 5px 5px #e5e5e5;
  border-radius: 8px;
`;

const IssueBox = styled.div`
  width: 220px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const CloseBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;
