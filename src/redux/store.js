import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import authReducer from './authReducer';
import tablesReducer from './tablesReducer';
import appReducer from './appReducer';

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    tables: tablesReducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;