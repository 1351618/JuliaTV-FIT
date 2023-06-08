import React from "react";
import logo from '../images/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id="header__logo">
                    <a href="/"><img src={logo} alt="JuliaTV-FIT" /></a>
                </div>
                <div id="header__menu">
                    <ul>
                        <li><a href="pages/training.html">ТРЕНИРОВКИ</a></li>
                        <li><a href="/">ПИТАНИЕ</a></li>
                        <li><a href="/">БОНУСЫ</a></li>
                        <li><a href="/">ЛИЧНЫЙ КАБИНЕТ</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;