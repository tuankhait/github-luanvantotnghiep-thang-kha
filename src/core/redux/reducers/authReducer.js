import produce from 'immer';
import {authActionTypes} from '../constants/index';

const initialState = {
userInfo: null,
userName:"",
password:"",

};

export const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    const {payload, type} = action;

    switch (type) {
      case authActionTypes.LOGIN_SUCCESS:
        draft.userName = payload?.username;
        draft.passWord = payload?.password;
       draft.userInfo =payload?.userInfo;
        break;
      case authActionTypes.LOGOUT:
        draft.userInfo=null;
          draft.userName= "";
            draft.password= "";
        break;
      default:
        break;
    }
  });
