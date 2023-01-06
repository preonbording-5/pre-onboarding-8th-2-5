import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import IssueModal from '../components/IssueTracking/IssueModal';
import IssueItem from '../components/IssueTracking/IssueItem';
import { IssueProps } from '../../lib/type/IssueProps';

// 테스트하기 편리하도록 임의로 추가해놓은 더미데이터 입니다.
// Todo : 개발 완료 후 삭제 부탁드립니다.
// Todo : progressIssues 초기 상태값으로 넣어놓은 부분도 같이 삭제해 주세요!
const progressIssueDummyData = {
  id: 1,
  state: '진행 중',
  title: '안녕하세요',
  text: '1234',
  due: '2023-01-10T01:38',
  manager: '홍길동',
};

type ModalType = 'CREATE' | 'EDIT';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('할 일');
  const [todoIssues, setTodoIssues] = useState<IssueProps[]>([]);
  const [progressIssues, setProgressIssues] = useState<IssueProps[]>([progressIssueDummyData]);
  const [doneIssues, setDoneIssues] = useState<IssueProps[]>([]);
  const [modalIssue, setModalIssue] = useState<IssueProps>({
    state: selectedState,
    title: '',
    text: '',
    due: '',
    manager: '',
  });
  const [modalType, setModalType] = useState<ModalType>('CREATE');

  const nextId = useRef(0);

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

  // console.log(todoIssues);
  // console.log('todoIssues', todoIssues);
  // console.log('progressIssues', progressIssues);
  // console.log('doneIssues', doneIssues);

  const handleIssueSubmit = (userInput: IssueProps, modalType: ModalType) => {
    if (modalType === 'CREATE') {
      nextId.current += 1;
      if (userInput.state === '할 일') {
        setTodoIssues([
          ...todoIssues,
          {
            ...userInput,
            id: nextId.current,
          },
        ]);
      }
      if (userInput.state === '진행 중') {
        setProgressIssues([
          ...progressIssues,
          {
            ...userInput,
            id: nextId.current,
          },
        ]);
      }
      if (userInput.state === '완료') {
        setDoneIssues([
          ...doneIssues,
          {
            ...userInput,
            id: nextId.current,
          },
        ]);
      }
    }

    if (modalType === 'EDIT') {
      if (userInput.state === '할 일') {
        setTodoIssues((prevIssue) => prevIssue.map((issue) => (issue.id === userInput.id ? userInput : issue)));
      }
      if (userInput.state === '진행 중') {
        setProgressIssues((prevIssue) => prevIssue.map((issue) => (issue.id === userInput.id ? userInput : issue)));
      }
      if (userInput.state === '완료') {
        setDoneIssues((prevIssue) => prevIssue.map((issue) => (issue.id === userInput.id ? userInput : issue)));
      }
    }
    handleToggleOpen();
  };


  const handleIssueDelete = (userInput: IssueProps) => {
    // eslint-disable-next-line no-restricted-globals
    const deleteCheck = confirm('정말 삭제하시겠습니까?');
    // console.log(deleteCheck);
    if (deleteCheck) {
      if (userInput.state === '할 일') {
        setTodoIssues((prev) => prev.filter((issue) => issue.id !== userInput.id));
      }
      if (userInput.state === '진행 중') {
        setProgressIssues((prev) => prev.filter((issue) => issue.id !== userInput.id));
      }
      if (userInput.state === '완료') {
        setDoneIssues((prev) => prev.filter((issue) => issue.id !== userInput.id));
      }
    }
  };

  return (
    <Container>
      {isOpen && (
        <IssueModal
          isOpen={isOpen}
          modalType={modalType}
          issueStateData={issueStateData}
          selectedState={selectedState}
          issue={modalIssue}
          isModalOpen={handleToggleOpen}
          onSubmit={handleIssueSubmit}
        />
      )}
      <IssueItem
        issueState='할 일'
        handleOpenCreateModal={handleOpenCreateModal}
        handleOpenEditModal={handleOpenEditModal}
        issues={todoIssues}
        onDelete={handleIssueDelete}
      />
      <IssueItem
        issueState='진행 중'
        handleOpenCreateModal={handleOpenCreateModal}
        handleOpenEditModal={handleOpenEditModal}
        issues={progressIssues}
        onDelete={handleIssueDelete}
      />
      <IssueItem
        issueState='완료'
        handleOpenCreateModal={handleOpenCreateModal}
        handleOpenEditModal={handleOpenEditModal}
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
