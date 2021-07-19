import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import newsReducer from './reducers/newsReducer.js';
import { getNews } from './actions/newsActions.js';

//CombineReducers
const reducers = combineReducers({
    news: newsReducer,
    getNews: getNews,
})

//Middleware
const middlewares = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;