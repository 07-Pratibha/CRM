import { apiGet } from "../../utils/ApiHelper";
import { apiPost } from "../../utils/ApiHelper";

const url = 'http://127.0.0.1:5000/';

export function getUserApi () {
    
    return apiGet (url, 'userinfo') 

}

export function registerUserApi (data) {

    return apiPost(url, 'register', data)
}



// export function apiPost(url, endPoint, data, config = {}) {
//     return apiReq(generateUrl(url, endPoint), data, 'post', {}, config);
//   }