import { FOLLOW, UNFOLLOW } from '../../actions/follow_actions';

export default (state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case FOLLOW:
            return Object.assign({}, newState, action);
        case UNFOLLOW:
            return Object.assign({}, newState, action);
        default:
            return state;
    }
}