import { GET_USERS_SUCCESSFUL } from '../actions/useractions';

// let user = JSON.parse(localStorage.getItem('user'));
const initialState =  { loading: false, users: []};

export function authentication(state = initialState, action) {
  switch (action.type) {

    case GET_USERS_SUCCESSFUL: {
      return {
        ...state,
        users : action.payload
      }
    }
   
    default:
      return state;
  }
}