import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

  return (

      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              {/*<Profile/>*/}
              <div className='app-wrapper-content'>
                  {/*<Route path='/dialogs' component={Dialogs}/>*/}
                  {/*<Route path='/profile' component={Profile}/>*/}

                  <Route path='/dialogs' render = {()=><Dialogs store={props.store} />}/>
                  <Route path='/profile' render = {()=><Profile store = {props.store} dispatch={props.dispatch}  />}/>

              </div>
          </div>
      </BrowserRouter>








  );
}



export default App;
