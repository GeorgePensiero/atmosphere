import * as SessionUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = user => dispatch => {
    return SessionUtil.login(user).then( user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const signup = user => dispatch => {
    return SessionUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
    return SessionUtil.logout().then( () => dispatch(logoutCurrentUser()),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}
const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    }
}
const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
}