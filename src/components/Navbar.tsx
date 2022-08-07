import { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarItems from "../data/navbar-items";

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={"navbar__container " + ( toggle ? 'show' : '' )} >
            <nav className='navbar__nav'>
                <div className='navbar__logo'>
                    <h3>IAPC Dev</h3>
                </div>
                <ul className="navbar__items">
                    {
                        navbarItems.map( ({ name, to }) => <li key={ name }><NavLink to={to} onClick={() => setToggle(!toggle)}> { name } </NavLink></li>)
                    }
                </ul>
                <div className="navbar__toggle">
                    {
                        (toggle)
                            ? <button onClick={ () => setToggle(!toggle)}><i className="fa-solid fa-xmark"></i></button>
                            : <button onClick={ () => setToggle(!toggle)}><i className="fa-solid fa-bars"></i></button>
                    }
                </div>
            </nav>
        </div>
    )
}
