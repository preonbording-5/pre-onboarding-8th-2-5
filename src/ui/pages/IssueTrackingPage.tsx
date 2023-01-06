import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import IssueModal from '../components/IssueTracking/IssueModal';
import IssueItem from '../components/IssueTracking/IssueItem';
import { IssueProps } from '../../lib/type/IssueProps';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('할 일');
  const [todoIssues, setTodoIssues] = useState<IssueProps[]>([]);
  const [progressIssues, setProgressIssues] = useState<IssueProps[]>([]);
  const [doneIssues, setDoneIssues] = useState<IssueProps[]>([]);

  const nextId = useRef(0);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenCreateModal = (issueState: string) => {
    setSelectedState(issueState);
    handleToggleOpen();
  };

  const handleChangeSelect = (e: any) => {
    setSelectedState(e.target.value);
  };

  // console.log(todoIssues);

  const handleIssueSubmit = (userInput: IssueProps) => {
    nextId.current += 1;
    if (userInput.state === '할 일') {
      setTodoIssues([...todoIssues, userInput]);
    }
    if (userInput.state === '진행 중') {
      setProgressIssues([...progressIssues, userInput]);
    }
    if (userInput.state === '완료') {
      setDoneIssues([...doneIssues, userInput]);
    }
    handleToggleOpen();
  };

  const handleIssueDelete = (userInput: IssueProps) => {
  };

  return (
    <Container>
      {isOpen && (
        <IssueModal
          isOpen={isOpen}
          isModalOpen={handleToggleOpen}
          issueStateData={issueStateData}
          selectedState={selectedState}
          handleChangeSelect={handleChangeSelect}
          onSubmit={handleIssueSubmit}
        />
      )}
      <IssueItem
        issueState='할 일'
        handleOpenCreateModal={handleOpenCreateModal}
        issues={todoIssues}
        onDelete={handleIssueDelete}
      />
      <IssueItem
        issueState='진행 중'
        handleOpenCreateModal={handleOpenCreateModal}
        issues={progressIssues}
        onDelete={handleIssueDelete}
      />
      <IssueItem
        issueState='완료'
        handleOpenCreateModal={handleOpenCreateModal}
        issues={doneIssues}
        onDelete={handleIssueDelete}
      />
    </Container>
  );
};

export default IssueTrackingPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
