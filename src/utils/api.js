import axios from 'axios';

import { getLogIn } from '../actions/ActionTypes';
import {
  TOKEN,
  SUCCESS,
  SAVE_DIARY_SUCCESS_MESSAGE
} from '../constants/index';

export const getLoggedInUserInfo = async (email, dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/user/login',
    {
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

export const saveDiary = async (todayDiary, originalDiaryText, token, history, setIsLoading) => {
  try {
    const response = await axios.post('http://localhost:4000/myfantasia/new',
    {
      data: todayDiary,
      fantasiaDiaryItem: originalDiaryText
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const { result } = response.data;

    if (result === SUCCESS) {
      setIsLoading(false);
      alert(SAVE_DIARY_SUCCESS_MESSAGE);

      history.push('/myFantasia');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getThisMonthDiaryList = async (token, year, month) => {
  try {
    const response = await axios.get('http://localhost:4000/myfantasia',
    {
      params: {
        month: month + 1,
        year: year
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });

    const { diaryList } = response.data;

    return diaryList;
  } catch (err) {
    console.warn(err);
  }
};
