import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import DiaryEnrollButton from './DiaryEnrollButton';
import MyFantasiaButton from './MyFantasiaButton';
import LogoutButton from './LogoutButton';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 95vh;

  .content_text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    font-size: 16px;
    border: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-weight: bold;
    background-color: skyblue;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const LeftBlock = styled.div`
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

const RightBlock = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Entry = () => {
  const history = useHistory();

  const onChangeNewDiary = () => {
    history.push('/newDiary');
  };

  const onChangeMyFantasia = () => {
    history.push('/myFantasia');
  };

  return (
    <ContentWrapper>
      <LeftBlock onClick={onChangeNewDiary}>
        <DiaryEnrollButton />
        <div className='content_text'>
          환상일기 등록하기
        </div>
      </LeftBlock>
      <RightBlock onClick={onChangeMyFantasia}>
        <MyFantasiaButton />
        <div className='content_text'>
          내 환상 일기장
        </div>
      </RightBlock>
      <LogoutButton />
    </ContentWrapper>
  );
};

export default Entry;
