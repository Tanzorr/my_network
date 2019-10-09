import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Usesrs from "./componets/Users/Usesrs";

function App(props) {

  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={DialogsContainer}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/users' component={Usesrs}/>
              </div>
          </div>
      </BrowserRouter>
  );
}



export default App;
