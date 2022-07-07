import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './userLogin';
import UserRegistration from './userRegistration';


function CustomRoutes() {
    return (
        <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/userRegistration" element={<UserRegistration />} />
          </Routes>
        </Suspense>
      </Router>

    );
} 

export default CustomRoutes