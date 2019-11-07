import React, {Component} from 'react';
import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, Route} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./componets/comon/Prloader/Preloader";




class App extends Component{
    componentDidMount() {
        this.props.initializeApp();
    }

    render(){
        if (!this.props.initialized){
            return <Preloader/>
        }
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

}

const mapStateToProps = (state)=>({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps,{initializeApp}),


)(App);

