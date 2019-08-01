import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const _nullUser = { id: null};
export default(state = _nullUser, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, newState)
            newState["id"] = action.user.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default: 
            return state;
    }
}