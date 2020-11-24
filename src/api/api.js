import * as axios from "axios";


export const checkInAPI = {
    checkIn(login, password, nickname) {
        return axios.post(`http://localhost/api/index.php?method=registration`, {
            login, password, nickname
        })
    }
}

export const authAPI = {
    login(login, password) {
        return axios.get(`http://localhost/api/index.php?method=login`)
    }
}

