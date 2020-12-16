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
  background: transparent;
  padding: 10px;
  font-size: 40px;
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
