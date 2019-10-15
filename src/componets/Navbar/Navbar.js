import React, {Component} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
                <nav className={s.nav}>
                    <div><NavLink to="/profile" activeClassName={s.active} >Profile</NavLink></div>
                    <div><NavLink to="/dialogs" activeClassName={s.active} >Messges</NavLink></div>
                    <div><NavLink to="/users" activeClassName={s.active} >Users</NavLink></div>
                    <div><a href="" >News</a></div>
                    <div><a href="" >Music</a></div>
                    <div><a href="" >Settings</a></div>
                </nav>

        );
    }
}

export default Navbar;