import React, {Component} from 'react';
import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./componets/comon/Prloader/Preloader";
import {BrowserRouter, Route} from "react-router-dom";
import { withRouter } from "react-router";
import store from "./redux/redux-store";






class App extends Component{
    componentDidMount() {
        this.props.initializeApp();
    }

    render(){
        if (!this.props.initialized){
            return <Preloader/>
        }
    return (
            <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' component={DialogsContainer}/>
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={LoginPage}/>
                    </div>
                </div>);
}

}

const mapStateToProps = (state)=>({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}),
)(App);

const SamuraiJSApp = (props)=>{
    return<BrowserRouter>
           <Provider store = {store}>
               <AppContainer/>
           </Provider>
        </BrowserRouter>
};

export default SamuraiJSApp;


