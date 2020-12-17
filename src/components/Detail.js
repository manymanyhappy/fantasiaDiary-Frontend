import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Hearder';

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 11.1%;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  .fantasiaDiary_box {
    display: flex;
    width: 50%;
    height: 100%;
    background-color: rosybrown;
  }

  .originalDiary_box {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: khaki;
  }

  .hide_box {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    right: 0;
    width: 45%;
    height: 100%;
    opacity: 90%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    width: 200px;
    height: 50px;
    letter-spacing: 5px;
    font-size: 15px;
    border-radius: 10px;
    z-index: 999;

    &:hover {
      background-color: rosybrown;
      transition: all ease 0.2s;
    }
  }
`;

const Detail = () => {
  const [ isShowingButtonClicked, setIsShowingButtonClicked ] = useState(false);

  const showingOriginDiary = () => {
    setIsShowingButtonClicked(true);
  };

  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper>
        <div className='fantasiaDiary_box'>
          fantasiaDiary_box
        </div>
        <div className='originalDiary_box'>
        </div>
        {
          !isShowingButtonClicked &&
          <div className='hide_box'>
            <button
              className='originalDiary_button'
              onClick={showingOriginDiary}
            >
              현실보기
            </button>
          </div>
        }
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default Detail;
