import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { useHistory } from 'react-router-dom';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 160px;

  .currentMonth_box {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: skyblue;
    color: rgba(0, 0, 0, 0.6);
  }

  .currentDate_box {
    display: flex;
    height: 120px;
    justify-content: center;
    align-items: flex-end;
    font-size: 70px;
    font-weight: bold;
    background-color: royalblue;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const DiaryEnrollButton = () => {
  const history = useHistory();

  const currentMonth = format(new Date(), 'MMMM');
  const currentDate = format(new Date(), 'd');

  const onChangeNewDiary = () => {
    history.push('/newDiary');
  };

  return (
    <ContentWrapper onClick={onChangeNewDiary}>
      <div className='currentMonth_box'>
        {currentMonth}
      </div>
      <div className='currentDate_box'>
        {currentDate}
      </div>
    </ContentWrapper>
  );
};

export default DiaryEnrollButton;
