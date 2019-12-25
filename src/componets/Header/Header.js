import React, {Component} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return (
                <header className={s.header}>
                   <div className={s.logo}>
                       <NavLink to={'/'}>ALEX</NavLink>
                   </div>
                    <div className={s.loginBlok}>
                        {
                            props.isAuth ?<div> {props.login} - <button className={s.logout} onClick={props.logout}>Log out</button> </div>:  <NavLink  to={'/login'}>Login</NavLink>
                        }

                    </div>
                </header>

        );

}

export default Header;