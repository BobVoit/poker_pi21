import * as axios from "axios";


export const authAPI = {
    checkIn(login, password, nickname) {
        return axios.get('http://localhost/api/index.php?method=registration&login='+login+'&password='+password+'&nickname='+nickname);
    },
    login(login, password) {
        return axios.get('http://localhost/api/index.php?method=login&login='+login+'&password='+password);
    },
    logout(token) {
        return axios.get('http://localhost/api/index.php?method=logout&token=' + token);
    },
    getUserByToken(token) {
        return axios.get('http://localhost/api/index.php?method=getuserbytoken&token='+token);
    }
}

