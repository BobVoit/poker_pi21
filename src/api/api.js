import * as axios from "axios";



export const authAPI = {
    checkIn(login, password, nickname) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'registration',
                login, password, nickname
            }
        })
    },
    login(login, password) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            // },
            params: {
                method: 'login',
                login, password
            },
            // withCredentials: true,
            // credentials: "include"
        })
    },
    logout(token) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'logout',
                token
            }
        })
    },
    getUserByToken(token) {
        return axios.get('http://poker/api/index.php?method=getuserbytoken&token=' + token);
    },
}


export const tablesAPI = {
    // токен игрока
    // id стола
    // rates - ставки
    createTable(token, name, quantPlayer = '', rates = '', password = '') {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'createtable',
                token, name, quantPlayer, rates, password
            }
        }, {withCredentials: true})
    },
    deleteTableById(id) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'deletetablebyid',
                id
            }
        })
    },
    connectToTable(token, id) {
    // id стола
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'connecttotable',
                token, id
            }
        })
    },
    disconnectFromTable(token, id) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'disconnectfromtable',
                token, id
            }
        })
    },
    getАllTables() {
        return axios({
            method: 'GET',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'getalltables'
            }
        });
    },
    getQuantPlayersOnTable(id) {
        return axios.get('http://poker/api/index.php?method=getquantplayersontable&id=' + id);
    },
    getTableById(id) {
        return axios.get('http://poker/api/index.php?method=gettablebyid&id='+id);
    },
}

export const usersAPI = {
    getStatsById(id) {
        return axios({
            method: 'GET',
            url: 'http://poker/api/index.php?method=getstatsbyid&id=' + id,
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            // },
            responseType: 'stream',
            // withCredentials: true,
            // credentials: "same-origin"
        });
    },
}

export const gameAPI = {
    transferToBank(token, money) {
        return axios({
            method: "POST",
            url: "http://poker/api/index.php",
            params: {
                method: "transfertobank",
                token, money
            }
        })
    },
    transferToMoney(token, money) {
        return axios({
            method: "POST",
            url: "http://poker/api/index.php",
            params: {
                method: "transfertomoney",
                token, money
            }
        })
    },
    startGame(tableId) {
        return axios({
            method: "POST",
            url: "http://poker/api/index.php",
            params: {
                method: "startgame",
                idtable: tableId
            }
        })
    },
    getGame(id) {
        return axios({
            method: "GET",
            url: "http://poker/api/index.php?method=getgame&id" + id,
            responseType: 'stream',
            withCredentials: true,
            credentials: "same-origin"
        })
    },

}
