import React from 'react';
import styled from 'styled-components';

import DiaryEnrollButton from './DiaryEnrollButton';
import MyFantasiaButton from './MyFantasiaButton';
import LogoutButton from './LogoutButton';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 13%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #081752;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <DiaryEnrollButton />
      </IconWrapper>
      <IconWrapper>
        <MyFantasiaButton />
      </IconWrapper>
      <LogoutButton />
    </HeaderWrapper>
  );
};

export default Header;
