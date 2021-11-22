import React from 'react'
import './../styles/sass/layout/nav.scss'
import logo from './../assets/logo.svg'
function Nav() {
    return (
        <nav className="nav">
            <img src={logo} alt="bohnome qui court" className="nav-logo"/>
            <ul className="nav-links">
                <li className="nav-link">Accueil</li>
                <li className="nav-link">Profil</li>
                <li className="nav-link">Réglage</li>
                <li className="nav-link">Communauté</li>
            </ul>
        </nav>
    )
}

export default Nav;
