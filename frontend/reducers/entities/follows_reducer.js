import { RECEIVE_FOLLOW_INFO } from "../../actions/follow_actions";

export default (state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_FOLLOW_INFO:
            return action.info
        default:
            return state;
    };
};