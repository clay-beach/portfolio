import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="nav">
                    <ul className="nav__right">
                        <NavLink activeClassName="nav__item--active" className="nav__item" exact to="/">Home</NavLink>
                        <NavLink activeClassName="nav__item--active" className="nav__item" to="/about/">About</NavLink>
                        <NavLink activeClassName="nav__item--active" className="nav__item" to="/work/">Work</NavLink>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;