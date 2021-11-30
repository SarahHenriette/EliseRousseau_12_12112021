import React from 'react'
import './../styles/sass/components/header.scss'
import PropTypes from 'prop-types';


/**
 * Represents a Header.
 * @param {object} props.infosUser - object contain datas user.
 */
function Header(props) {
    return (
        <header className="header">
            <h1 className="header-title">Bonjour <span className="header-title_name">{props.infosUser.firstName}</span></h1>
            <p className="header-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

Header.propTypes = {
    infosUser: PropTypes.object
}

export default Header;