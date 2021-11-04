import produce from 'immer';
import {authActionTypes} from '../constants/index';

const initialState = {
  userInfo: null,
  username: '',
  password: '',
  dataLogin: null,
};

export const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    const {payload, type} = action;

    switch (type) {
      case authActionTypes.LOGIN_SUCCESS:
        draft.username = payload?.username;
        draft.password = payload?.password;
        draft.userInfo = payload?.userInfo;
        draft.dataLogin = payload?.dataLogin;
        break;
      case authActionTypes.LOGOUT:
        draft.userInfo = null;
        draft.username = '';
        draft.password = '';
        break;
      case authActionTypes.CHANGE_PASS:
        draft.password = payload;
        break;
      default:
        break;
    }
  });
