import { tablesAPI } from '../api/api';
import { errorsOfAPI } from '../another/errors';


const SET_TABLES = 'SET_TABLES';
const IS_FETCHING = 'IS_FETCHING';
const SET_ERROR = 'SET_ERROR_TABLE';
const SET_CLEAR_ERROR = 'SET_CLEAR_ERROR_TABLE';
const SET_INFO_ABOUT_TABLE = 'SET_INFO_ABOUT_TABLE';
const SET_COUNT_ACTIVE_PLAYERS = 'SET_COUNT_ACTIVE_PLAYERS';

let initialState = {
    tables: [],
    isFetching: false,
    currentTable: {},
    error: ""
}

const tablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLES: {
            return {
                ...state,
                tables: action.tables
            }
        } 
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: errorsOfAPI.find(elem => elem.value === action.error)
            }
        }
        case SET_INFO_ABOUT_TABLE: {
            return {
                ...state,
                currentTable: {
                    id: Number(action.table.id),
                    name: action.table.name,
                    quantity_players: Number(action.table.quantity_players),
                    active_players_id: action.table.active_players_id.split(' ')
                }
            }
        }
        // case SET_COUNT_ACTIVE_PLAYERS: {
        //     return {
        //         ...state,
        //         tables: state.tables.map(table => table.countActivePlayers = )
        //     }
        // }
        default: 
            return state;
    }
}


export const setTables = (tables) => ({ type: SET_TABLES, tables});

export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export const setErrorTable = (error) => ({type: SET_ERROR, error});

export const setClearErrorTable = () => ({type: SET_CLEAR_ERROR});

export const setInfoAboutTable = (table) => ({ type: SET_INFO_ABOUT_TABLE, table });

export const setCountActivePlayers = (countPlayers) => ({ type: SET_COUNT_ACTIVE_PLAYERS, countPlayers});


export const createTable = (token, name, quantPlayer = null, rates = null, password = null) => async (dispatch) => {
    let response = await tablesAPI.createTable(token, name, quantPlayer, rates, password)
    if (response.data.result === 'ok' && response.data.data === true) {
        dispatch(getАllTables());
    }
}

export const connectToTable = (token, id) => async (dispatch) => {
    let response = await tablesAPI.connectToTable(token, id)
    console.log(response);
}

export const getАllTables = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await tablesAPI.getАllTables();
    console.log(response.data.data)
    let data = response.data.data.map(elem  => ({...elem, active_players: elem.active_players_id.trim().split(" ").length }));
    dispatch(setTables(data));
    dispatch(setIsFetching(false));
}

export const getTableById = (id) => async (dispatch) => {
    let response = await tablesAPI.getTableById(id);  
    let data = response.data.data;
    if (response.data.result === 'ok') {
      dispatch(setInfoAboutTable(data));
    }
}

// export const getQuantPlayersOnTable = (id) => async (dispatch) => {
//     let response = await tablesAPI.getQuantPlayersOnTable(id);
//     let data = response.data;
//     if (data.result === 'ok') {
        
//     }
// }

export default tablesReducer;
