import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";


function App(props) {

  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={DialogsContainer}/>
                  <Route path='/profile' component={ProfileContainer}/>
                  <Route path='/users' component={UsersContainer}/>
              </div>
          </div>
      </BrowserRouter>
  );
}



export default App;
