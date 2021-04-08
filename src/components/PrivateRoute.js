import React from 'react';
import Keys from './Keys';
import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem(Keys.jsonkey);
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;