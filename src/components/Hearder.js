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
  position: fixed;
  left: 0;
  top: 0;
  padding: 2.4%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  display: flex;
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
      <IconWrapper>
        <LogoutButton />
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
