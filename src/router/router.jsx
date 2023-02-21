import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/login';
import Register from '../pages/signup/register';
import Dashboard from '../pages/dashboard/dashboard';

function RouterComponent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login/>} />
                    <Route exact path='/register' element={<Register/>} />
                    <Route exact path='/dashboard' element={<Dashboard/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default RouterComponent