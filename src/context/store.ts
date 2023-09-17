// src/context/store.ts
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // You'll need to create this rootReducer
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
