import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './reducers/images';

const reducer = combineReducers({
    images: imagesReducer
});

export default createStore(
    reducer,
    applyMiddleware(thunk)
);