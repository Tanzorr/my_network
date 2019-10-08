import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";

function App(props) {
    console.log('props', props);
  return (

      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              {/*<Profile/>*/}
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>

                  <Route path='/dialogs' render = {()=><DialogsContainer />}/>
                  <Route path='/profile' render = {()=><Profile  />}/>

              </div>
          </div>
      </BrowserRouter>








  );
}



export default App;
