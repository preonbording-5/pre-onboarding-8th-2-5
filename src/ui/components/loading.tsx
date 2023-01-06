import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingContainer>
        <LoadingIcon />
        <LoadingText>loading</LoadingText>
      </LoadingContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;
  border: 3px solid red;
  border-color: transparent red transparent red;
  animation: ${rotateLoading} 1.5s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const LoadingContainer = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;

  margin: 40px auto;

  ${LoadingIcon} {
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    ${LoadingIcon} {
      border-color: transparent yellow transparent yellow;
      transition: all 0.5s ease-in-out;
    }
  }
`;
const LoadingText = styled.div`
  color: red;
  font-family: 'Helvetica Neue, ' Helvetica ', ' 'arial';
  font-size: 10px;
  font-weight: bold;
  margin-top: 45px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100px;
`;
export default Loading;
