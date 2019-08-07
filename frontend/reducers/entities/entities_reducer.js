import { combineReducers } from 'redux';
import users from './users_reducer';
import stories from './stories_reducer';
import responses from './responses_reducer';

export default combineReducers({
    users,
    stories,
    responses,
});

