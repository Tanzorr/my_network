import React from 'react';
import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/login";



function App(props) {

  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={DialogsContainer}/>
                  <Route path='/profile/:userId?' component={ProfileContainer}/>
                  <Route path='/users' component={UsersContainer}/>
                  <Route path='/login' component={LoginPage}/>
              </div>
          </div>
      </BrowserRouter>
  );
}



export default App;
