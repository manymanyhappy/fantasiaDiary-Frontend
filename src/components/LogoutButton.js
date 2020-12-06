import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getLogOut } from '../actions/ActionTypes';
import { TOKEN } from '../constants/index';

const LogoutButtonWrapper = styled.a`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: bold;
  border: solid 1px royalblue;
  border-radius: 10px;
  margin-right: 30px;
  background-color: royalblue;
  opacity: 50%;
  letter-spacing: 2px;
`;

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickLogout = async () => {
    await localStorage.removeItem(TOKEN);

    dispatch(getLogOut());
    history.push('/');
  };

  return (
    <LogoutButtonWrapper onClick={onClickLogout}>
        LOGOUT
    </LogoutButtonWrapper>
  );
};

export default LogoutButton;
