import {applyMiddleware, combineReducers, createStore} from 'redux';
import testReducer from './reducers/test.js';
import createReducer from './reducers/create.js';
import initialState from './initialstate.js';
import thunk from 'redux-thunk'; // allows us to use asynchronous actions

var rootReducer = combineReducers({
	test: testReducer,   // this means heroReducer will operate on appState.heroes
	create: createReducer
});
module.exports = applyMiddleware(thunk)(createStore)(rootReducer,initialState());
