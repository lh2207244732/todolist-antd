import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import { createLogger } from 'redux-logger'

const middlewares = [];
middlewares.push(thunk)
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
    });
    middlewares.push(logger);
}



const store = createStore(reducer, applyMiddleware(...middlewares));

export default store

