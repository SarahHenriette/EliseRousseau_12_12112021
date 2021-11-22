import React from 'react'
import './../styles/sass/components/header.scss'

function Header(props) {
    return (
        <header className="header">
            <h1 className="header-title">Bonjour <span className="header-title_name">{props.infosUser.firstName}</span></h1>
            <p className="header-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header;