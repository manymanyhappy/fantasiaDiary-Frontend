import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Hearder';
import Calendar from './Calendar';
import FantasiaD3Graph from './FantasiaD3Graph';

const ContentWrapper = styled.div`
  display: flex;
  height: 190vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 11.1%;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f0f2f5;
`;

const MyFantasia = () => {
  const [ diaryList, setDiaryList ] = useState([]);
  const [ D3data, setD3data ] = useState([]);
console.log('diaryList', diaryList);
  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper>
        <Calendar
          list={diaryList}
          setList={setDiaryList}
          setD3data={setD3data}
        />
        <FantasiaD3Graph
          list={D3data}
        />
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default MyFantasia;
