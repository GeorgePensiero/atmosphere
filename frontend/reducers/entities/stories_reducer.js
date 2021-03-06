import { RECEIVE_ALL_STORIES, RECEIVE_STORY, DELETE_STORY, RECEIVE_USER_STORIES } from "../../actions/story_actions";
import { RECEIVE_ALL_RESPONSES, RECEIVE_USER_RESPONSES } from "../../actions/response_actions";
import { LIKE } from '../../actions/like_actions';

export default(state = {}, action) => {
    let newState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_STORIES: 
            return action.stories;
        case RECEIVE_USER_STORIES:
            return action.stories || {};
        case RECEIVE_STORY:
            newState = Object.assign({}, newState);
            newState[action.story.id] = action.story;
            return newState;
        case DELETE_STORY:
            newState = Object.assign({}, newState);
            delete newState[action.storyId];
            return newState;
        case RECEIVE_ALL_RESPONSES:
            newState = Object.assign({}, newState);
            newState[action.story.id] = action.story;
            return newState;
        case RECEIVE_USER_RESPONSES:
            return action.stories;
        case LIKE:
            newState = Object.assign({}, newState);
            newState[action.story.id] = action.story;
            return newState;
        default: 
            return state;
    };
};