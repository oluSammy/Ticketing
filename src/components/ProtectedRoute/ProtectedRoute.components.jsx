import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectCurrentUser } from './../../Redux/User/user.selectors';

const ProtectedRoute = ({ currentUser, component: Component, ...rest }) => {
    console.log(currentUser)
    return (
        <Route {...rest} component={(props) => (
            currentUser ? (
                <Component {...props} />
                ) : (
                <Redirect to="/" />
            )
        )} />
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps) (ProtectedRoute);
