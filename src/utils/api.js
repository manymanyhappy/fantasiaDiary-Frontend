import axios from 'axios';

import { getLogIn } from '../actions/ActionTypes';
import {
  TOKEN,
  SUCCESS,
  SAVE_DIARY_SUCCESS_MESSAGE
} from '../constants/index';

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

export const saveDiary = async (todayDiary, token, history) => {
  try {
    const response = await axios.post('http://localhost:4000/myfantasia/new',
    {
      data: todayDiary
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const { result } = response.data;

    if (result === SUCCESS) {
      alert(SAVE_DIARY_SUCCESS_MESSAGE);

      history.push('/myFantasia');
    }
  } catch (err) {
    console.warn(err);
  }
};
