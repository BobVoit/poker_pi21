import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import authReducer from './authReducer';
import tablesReducer from './tablesReducer';
import appReducer from './appReducer';
import gameReducer from './gameReducer';

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    tables: tablesReducer,
    app: appReducer,
    game: gameReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;