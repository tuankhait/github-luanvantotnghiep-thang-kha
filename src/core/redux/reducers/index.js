/*
 * combines all th existing reducers
 */
import * as authReducer from './authReducer';

export default Object.assign({}, authReducer);
