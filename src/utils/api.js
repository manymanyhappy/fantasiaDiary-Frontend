import axios from 'axios';

import { SUCCESS, TOKEN } from '../constants/index';
import { getLogIn } from '../actions/ActionTypes';

export const getLoggedInUserInfo = async (email, dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/user/login', {
      email: email
    });

    const { result, token, userData } = response.data;

    if (result === SUCCESS) {
      await localStorage.setItem(TOKEN, token);

      dispatch(getLogIn(userData));
    }
  } catch (err) {
    console.warn(err);
  }
};
