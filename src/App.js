import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/loginPage/loginPage.component';
import ManagerHomepage from './pages/Manager-HomePage/managerHomepage.components';
import StaffHomepage from './pages/Staff-Homepage/StaffHomepage.component';
import { connect } from 'react-redux';
import { setUser } from './Redux/User/user.actions';
import { selectCurrentUser } from './Redux/User/user.selectors';
import { auth } from './firebase/firebase.utils';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.components';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
  })
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <ProtectedRoute exact path="/manager" component={ManagerHomepage} />
      <Route exact path="/it" component={StaffHomepage} />
      <Route exact path="/staff" component={StaffHomepage} />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
});

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});


export default connect(mapStateToProps, mapDispatchToProps) (App);