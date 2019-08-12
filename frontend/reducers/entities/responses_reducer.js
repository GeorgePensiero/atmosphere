import { RECEIVE_ALL_RESPONSES, RECEIVE_RESPONSE, DELETE_RESPONSE, RECEIVE_USER_RESPONSES } from '../../actions/response_actions';

export default (state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_RESPONSES:
            return action.responses;
        case RECEIVE_USER_RESPONSES:
            return action.responses;
        case RECEIVE_RESPONSE:
            newState = Object.assign({}, newState);
            newState[action.response.id] = action.response;
            return newState;
        case DELETE_RESPONSE:
            return action.responses;
        default: 
            return state;
    }
}