import {
  LOGIN,
  LOGOUT
} from './index';

export const getLogIn = (userData) => {
  return {
    type: LOGIN,
    data: userData
  };
};

export const getLogOut = () => {
  return {
    type: LOGOUT
  };
};
