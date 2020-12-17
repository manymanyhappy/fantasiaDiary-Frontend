import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logInGoogle } from '../utils/firebase';
import { getLoggedInUserInfo } from '../utils/api';

const ContentWrapper = styled.div`
  display: flex;
  height: 95vh;
  justify-content: center;
  align-items: flex-end;
  button {
    width: 300px;
    height: 50px;
    margin-bottom: 70px;
    font-size: 20px;
    border: none;
    border-radius: 30px;
    z-index: 999;
    outline: none;
  }
`;

const LeftBlock = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.1);

  p {
    align-self: flex-end;
    font-size: 30px;
    margin-bottom: 200px;
  }
`;

const RightBlock = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  p {
    align-self: flex-end;
    font-size: 30px;
    margin-bottom: 200px;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onHandleClick = async () => {
    const loggedInUserData = await logInGoogle();

    const { accessToken } = loggedInUserData.credential;
    const { email } = loggedInUserData.additionalUserInfo.profile;

    if (accessToken) {
      const requestLogIn = await getLoggedInUserInfo(email, dispatch);

      history.push('/entry');
    }
  };

  return (
    <ContentWrapper>
      <button onClick={onHandleClick}>
        Google Login
      </button>
      <LeftBlock>
        <p>환상의</p>
      </LeftBlock>
      <RightBlock>
        <p>일기장</p>
      </RightBlock>
    </ContentWrapper>
  );
};

export default Home;
