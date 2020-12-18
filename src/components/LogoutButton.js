import React from 'react';
import styled from 'styled-components';
import { GrLogout } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getLogOut } from '../actions/ActionTypes';
import { TOKEN } from '../constants/index';

const LogoutButtonWrapper = styled.button`
  display: flex;
  border: none;
  outline: none;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #d4d6d8;
  border-radius: 50%;
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
        <GrLogout />
    </LogoutButtonWrapper>
  );
};

export default LogoutButton;
