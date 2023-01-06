import React from 'react';
import styled from 'styled-components';
import IssueItem from '../components/IssueTracking/IssueItem';

const IssueTrackingPage = () => {
  const issueStateData = ['할 일', '진행 중', '완료'];

  return (
    <Container>
      <IssueItem issueState="할 일" issueStateData={issueStateData} />
      <IssueItem issueState="진행 중" issueStateData={issueStateData} />
      <IssueItem issueState="완료" issueStateData={issueStateData} />
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
