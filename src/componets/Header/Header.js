import React, {Component} from 'react';
import s from './Header.module.css'

class Header extends Component {
    render() {
        return (
                <header className={s.header}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCALUYO98V2NDNiZuP7DzxV3SOY8HtKDaiiaKJA4wV8Tdz43AxOg" alt=""/>
                </header>

        );
    }
}

export default Header;