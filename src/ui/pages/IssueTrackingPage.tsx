import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import IssueModal from '../components/IssueTracking/IssueModal';
import IssueItem from '../components/IssueTracking/IssueItem';
import { IssueProps } from '../../lib/type/IssueProps';
import { useRecoilState } from 'recoil';
import { issueData, loadingState } from '../../recoil/atom';
import { createIssue, deleteIssue, getAllIssueData, updateIssue } from '../../api/localStorage';
import Loading from '../components/loading';

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
    orderNumber: 0,
  });
  const [modalType, setModalType] = useState<ModalType>('CREATE');
  const [issueList, setIssueList] = useRecoilState(issueData);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const draggedItem = useRef<IssueProps | null>(null);
  const dropPoint = useRef<IssueProps | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIssueList(() => getAllIssueData());
      setIsLoading(false);
    }, 500);
  }, [setIssueList, setIsLoading]);

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
      setIsLoading(true);
      setTimeout(() => {
        createIssue(userInput);
        setIssueList([...issueList, userInput]);
        setIsLoading(false);
      }, 500);
    }

    if (modalType === 'EDIT') {
      setIsLoading(true);
      setTimeout(() => {
        updateIssue(userInput);
        setIssueList(() => getAllIssueData());
        setIsLoading(false);
      }, 500);
    }
    handleToggleOpen();
  };

  const handleIssueDelete = (userInput: IssueProps) => {
    // eslint-disable-next-line no-restricted-globals
    const deleteCheck = confirm('정말 삭제하시겠습니까?');
    if (deleteCheck) {
      setTimeout(() => {
        setIsLoading(true);
        deleteIssue(userInput.id!);
        setIssueList(() => getAllIssueData());
      }, 500);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading ? <Loading /> : ''}
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
            draggedItem={draggedItem}
            dropPoint={dropPoint}
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
