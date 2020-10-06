import React, { useEffect } from 'react';
import './App.scss';
import LoginPage from './pages/loginPage/loginPage.component';
import { connect } from 'react-redux';
import { setUser } from './Redux/User/user.actions';
import { selectCurrentUser } from './Redux/User/user.selectors';
import { auth } from './firebase/firebase.utils';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Dashboard from './pages/Dashboard/Dashboard.component';
import { createStructuredSelector } from 'reselect';

function App({ setCurrentUser, currentUser }) {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
  });
  return (
    <div className="App">
      {currentUser ? <Dashboard /> : <LoginPage /> }
    </div>
  );

}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps, mapDispatchToProps) (App);