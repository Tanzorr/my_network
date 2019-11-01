import React, {Component} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return (
                <header className={s.header}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCALUYO98V2NDNiZuP7DzxV3SOY8HtKDaiiaKJA4wV8Tdz43AxOg" alt=""/>
                    <div className={s.loginBlok}>
                        {
                            props.isAuth ?<div> {props.login} - <button onClick={props.logout}>Log out</button> </div>:  <NavLink to={'/login'}>Login</NavLink>
                        }

                    </div>
                </header>

        );

}

export default Header;