// // import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
// import { createStore, applyMiddleware }  from 'redux'
// import thunk from 'react'

// export default function configureStore(
//   initialState = {}
// ) {
//   //had written middleware(thunk) earlier
//   const store = createStore(rootReducer, initialState, applyMiddleware());
  
//   return store;
// }

import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window != 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = context => createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));

export default store;

//use selector hook - allows us to extract data from the redux store state
// const result: any = useSelector(selector: Function, equalityFn?: Function)