import { combineReducers } from 'redux';
import sessionErrors from './sessionErrorsReducer';

export default combineReducers({
    session: sessionErrors,
});

