import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

import { logInGoogle } from '../utils/firebase';
import { getLoggedInUserInfo } from '../utils/api';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  justify-content: center;
  align-items: center;

  button {
    width: 300px;
    height: 60px;
    margin-bottom: 70px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    z-index: 999;
    outline: none;
    margin-top: 250px;
    background: transparent;
    border: 1px solid #e4d097;
    letter-spacing: 2px;
    color: #e4d097;

    &:hover {
      background-color: #e4d097;
      color: #102f81;
      transition: all ease 0.4s;
    }
  }
`;

const TopBlock = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: flex-end;
  background-color: #e4d097;

  .top_dim {
    display: flex;
    width: 45%;
    height: 370px;
    background-color: rgba(0, 0, 0, 0.4);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    /* border-left: 1px solid #102f81;
    border-right: 1px solid #102f81; */
    /* border-top: 1px solid #102f81; */
  }
`;

const BottomBlock = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  justify-content: center;
  background-color: #081752;

  .bottom_dim {
    display: flex;
    width: 45%;
    height: 370px;
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    /* border-left: 1px solid #fce7aa;
    border-right: 1px solid #fce7aa; */
    /* border-bottom: 1px solid #fce7aa; */
  }
`;

const TypingWrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 170px;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  z-index: 999;
  margin-top: 150px;
  font-weight: 300;
  color: #102f81;
  letter-spacing: 20px;
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
      <TypingWrapper>
        <ReactTypingEffect
          text={['환상의 일기장']}
          eraseDelay={20000}
          displayTextRenderer={(text, i) => {
            return (
              <>
              {
                text.split('').map((char, i) => {
                  const key = `${i}`;

                  return (
                    <span
                      key={key}
                      style={i > 3 ? { color: '#a60711'} : {}}
                    >{char}</span>
                  );
                })
              }
              </>
            );
          }}
        />
      </TypingWrapper>
      <button onClick={onHandleClick}>
        Google Login
      </button>
      <TopBlock>
        <div className='top_dim'></div>
      </TopBlock>
      <BottomBlock>
        <div className='bottom_dim'></div>
      </BottomBlock>
    </ContentWrapper>
  );
};

export default Home;
