import React from 'react';
import styled from 'styled-components';

import Header from './Hearder';

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 6.5%;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Calendar = () => {
  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper>
        <div>
          calendar page 입니다.
        </div>
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default Calendar;
