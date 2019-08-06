import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_STORIES, RECEIVE_USER_STORIES, RECEIVE_STORY } from "../../actions/story_actions";

export default(state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, { [action.user.id]: action.user})
        case RECEIVE_ALL_STORIES:
            return Object.assign({}, newState, action.users );
        case RECEIVE_STORY: 
            return Object.assign({}, newState, action.user);
        default: 
            return state;
    }
}

