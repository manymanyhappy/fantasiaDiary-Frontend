import {
  LOGIN,
  LOGOUT
} from '../actions/index';

const initialState = {
  isLoggedIn: false,
  userData: null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        userData: action.data
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        userData: null
      };
    default:
      return state;
  }
}
