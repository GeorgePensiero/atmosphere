import { combineReducers } from 'redux';
import sessionErrors from './sessionErrorsReducer';
import stories from './storyErrorsReducer';

export default combineReducers({
    session: sessionErrors,
    stories,
});

