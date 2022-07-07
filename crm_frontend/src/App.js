import React from 'react';
import axios from 'axios'
import CustomRoutes from './routes'

const api = axios.create({
    baseURL: 'http://localhost:3000/UserRegistration'
})

const App = () => (
 <div>
  <CustomRoutes/>
 </div>
);

export default App


// "http://localhost:3000/UserRegistration"

