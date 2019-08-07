import { combineReducers } from 'redux';
import sessionErrors from './sessionErrorsReducer';
import stories from './storyErrorsReducer';
import responses from './responseErrorsReducer';

export default combineReducers({
    session: sessionErrors,
    stories,
    responses,
});

