import React from 'react';
import styled from 'styled-components';

import Header from './Hearder';
import Calendar from './Calendar';

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 5.2%;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const MyFantasia = () => {
  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper>
        <Calendar />
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default MyFantasia;
