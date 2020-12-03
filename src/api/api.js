import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://poker/api/index.php?',
})

export const authAPI = {
    checkIn(login, password, nickname) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'registration',
                login, password, nickname
            }
        }, {withCredentials: true})
    },
    login(login, password) {
        return axios({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'login',
                login, password
            }
        }, {withCredentials: true})
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
    createTable(token, name, quantPlayer = null, rates = null, password = null) {
        return axios.post({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'createtable',
                token, name, quantPlayer, rates, password
            }
        })
    },
    deleteTableById(id) {
        return axios.post({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'deletetablebyid',
                id
            }
        })
    },
    connectToTable(token, id) {
        return axios.post({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'connecttotable',
                token, id
            }
        })
    },
    disconnectFromTable(token, id) {
        return axios.post({
            method: 'POST',
            url: 'http://poker/api/index.php?',
            params: {
                method: 'disconnectfromtable',
                token, id
            }
        })
    },
    getTallTables() {
        return axios.get('http://localhost/api/index.php?method=getalltables');
    },
    getTableById(id) {
        return axios.get('http://localhost/api/index.php?method=gettablebyid&id=' + id);
    },
    getQuantPlayersOnTable(id) {
        return axios.get('http://localhost/api/index.php?method=getquantplayersontable&id=' + id);
    }
}

