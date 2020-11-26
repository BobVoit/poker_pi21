import * as axios from "axios";


export const authAPI = {
    checkIn(login, password, nickname) {
        return axios.post('http://localhost/api/index.php?method=registration', {
            login, password, nickname
        });
    },
    login(login, password) {
        return axios.get('http://localhost/api/index.php?method=login&login='+login+'&password='+password);
    },
    logout() {
        return axios.get('url');
    }
}

