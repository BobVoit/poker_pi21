import * as axios from "axios";

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'http://poker/api/index.php?',
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers" : "*",
//     }
// })

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
        }, {withCredentials: true, credentials: "same-origin" })
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
        }, {withCredentials: true});
    },
    // getTableById(id) {
    //     return axios({
    //         method: 'GET',
    //         url: 'http://localhost/api/index.php?method=gettablebyid',
    //         params: {
    //             id
    //         }
    //     }, {withCredentials: true});
    // },
    getTableById(id) {
        return axios.get('http://poker/api/index.php?method=gettablebyid&id='+id);
    },
    getQuantPlayersOnTable(id) {
        return axios.get('http://localhost/api/index.php?method=getquantplayersontable&id=' + id);
    },

}

