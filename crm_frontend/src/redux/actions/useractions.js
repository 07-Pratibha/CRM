import { getUserApi } from '../api/users';
import { apiPost } from '../../utils/ApiHelper';
import { registerUserApi } from '../api/users';


// export const userActions = {
//     login,
//     register,
// };

// function login(username, password) {
//     return dispatch => {
//         dispatch(request({ username }));

//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };
//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }


// function register(user) {
//     return dispatch => {
//         dispatch(request(user));

//         userService.register(user)
//             .then(
//                 user => { 
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(alertActions.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
//     function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
// }

export const GET_USERS_SUCCESSFUL = 'GET_USERS_SUCCESSFUL';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';

export function getUser () {
    return dispatch => {
        return new Promise((resolve, reject) => {
            getUserApi()
            .then(
                res => {
                    dispatch({
                        type: GET_USERS_SUCCESSFUL,
                        payload: res.users
                    })
                    resolve(res);
                }
            ).catch(
                err => {
                    reject(err);
                }
            )

        })
    };
}

export function registerUser (data) {
    return dispatch => {
        return new Promise((resolve,reject) => {
            registerUserApi(data)
            .then(
                res => {
                   resolve(res);
                }
            ).catch(
                error => {
                    reject(error);
                }
            )

        })
    }
}