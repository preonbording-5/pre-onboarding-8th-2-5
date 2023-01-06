import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueModal from '../components/IssueTracking/IssueModal';
import IssueItem from '../components/IssueTracking/IssueItem';
import { IssueProps } from '../../lib/type/IssueProps';
import { useRecoilState } from 'recoil';
import { issueData } from '../../recoil/atom';
import { createIssue, deleteIssue, getAllIssueData, updateIssue } from '../../api/localStorage';

type ModalType = 'CREATE' | 'EDIT';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('할 일');
  const [modalIssue, setModalIssue] = useState<IssueProps>({
    state: selectedState,
    title: '',
    text: '',
    due: '',
    manager: '',
    id: 0,
  });
  const [modalType, setModalType] = useState<ModalType>('CREATE');
  const [issueList, setIssueList] = useRecoilState(issueData);

  useEffect(() => {
    setIssueList(() => getAllIssueData());
  }, [setIssueList]);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpenCreateModal = (issueState: string) => {
    setModalType('CREATE');
    setSelectedState(issueState);
    handleToggleOpen();
  };

  const handleOpenEditModal = (issue: IssueProps) => {
    setModalType('EDIT');
    setModalIssue(issue);
    handleToggleOpen();
  };

  const handleIssueSubmit = (userInput: IssueProps, modalType: ModalType) => {
    if (modalType === 'CREATE') {
      createIssue(userInput);
      setIssueList([...issueList, userInput]);
    }

    if (modalType === 'EDIT') {
      updateIssue(userInput);
      setIssueList(() => getAllIssueData());
    }
    handleToggleOpen();
  };

  const handleIssueDelete = (userInput: IssueProps) => {
    // eslint-disable-next-line no-restricted-globals
    const deleteCheck = confirm('정말 삭제하시겠습니까?');
    if (deleteCheck) {
      deleteIssue(userInput.id!);
      setIssueList(() => getAllIssueData());
    }
  };

  return (
    <Container>
      {isOpen && (
        <IssueModal
          modalType={modalType}
          issueStateData={issueStateData}
          selectedState={selectedState}
          issue={modalIssue}
          isModalOpen={handleToggleOpen}
          onSubmit={handleIssueSubmit}
        />
      )}
      {issueStateData.map((item, index) => {
        return (
          <IssueItem
            key={index}
            issueState={item}
            handleOpenCreateModal={handleOpenCreateModal}
            handleOpenEditModal={handleOpenEditModal}
            issues={issueList}
            onDelete={handleIssueDelete}
          />
        );
      })}
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
