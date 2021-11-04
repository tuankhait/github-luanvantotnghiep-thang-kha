/*
 * Reducer actions related with login
 */
import {authActionTypes} from '../constants/';

class AuthActions {
  loginSuccess(data) {
    return {type: authActionTypes.LOGIN_SUCCESS, payload: data};
  }
  logout() {
    return {type: authActionTypes.LOGOUT};
  }
  changePass(data) {
    return { type: authActionTypes.CHANGE_PASS, payload: data };
  }
}

export default new AuthActions();
