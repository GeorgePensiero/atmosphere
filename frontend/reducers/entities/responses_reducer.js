import { RECEIVE_ALL_RESPONSES, RECEIVE_RESPONSE, DELETE_RESPONSE } from '../../actions/response_actions';

export default (state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_RESPONSES:
            return action.responses;
        case RECEIVE_RESPONSE:
            newState[action.response.id] = action.response;
            return newState;
        case DELETE_RESPONSE:
            delete newState[action.response.id];
            return newState;
        default: 
            return state;
    }
}