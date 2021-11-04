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
}

export default new AuthActions();
