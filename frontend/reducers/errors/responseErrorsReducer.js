import { RECEIVE_RESPONSE_ERRORS } from '../../actions/response_actions';

export default(state = [], action) => {
    switch(action.type){
        case RECEIVE_RESPONSE_ERRORS:
            return action.errors;
        default: 
            return state;
    }
}