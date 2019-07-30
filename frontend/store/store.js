import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger))
}