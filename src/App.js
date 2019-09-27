import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    console.log('props', props);
  return (

      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              {/*<Profile/>*/}
              <div className='app-wrapper-content'>
                  {/*<Route path='/dialogs' component={Dialogs}/>*/}
                  {/*<Route path='/profile' component={Profile}/>*/}

                  <Route path='/dialogs' render = {()=><Dialogs state ={props.state.dialogsPage}  />}/>
                  <Route path='/profile' render = {()=><Profile state = {props.state.profilePage} addPost={props.addPost} updateNextPostText={props.updateNextPostText} />}/>

              </div>
          </div>
      </BrowserRouter>








  );
}



export default App;
