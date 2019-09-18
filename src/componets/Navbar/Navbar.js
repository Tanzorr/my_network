import React, {Component} from 'react';
import s from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (

                <nav className={s.nav}>
                    <div><a href="" >Profile</a></div>
                    <div><a href="" >Messges</a></div>
                    <div><a href="" >News</a></div>
                    <div><a href="" >Music</a></div>
                    <div><a href="" >Settings</a></div>
                </nav>

        );
    }
}

export default Navbar;