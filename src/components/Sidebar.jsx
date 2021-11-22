import React from 'react'
import './../styles/sass/layout/sidebar.scss'
import iconYoga from './../assets/icons/yoga.svg'
import iconNatation from './../assets/icons/natation.svg'
import iconBike from './../assets/icons/bike.svg'
import iconMuscu from './../assets/icons/muscu.svg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-icons">
                <img src={iconYoga} alt=""/>
                <img src={iconNatation} alt=""/>
                <img src={iconBike} alt=""/>
                <img src={iconMuscu} alt=""/>
            </div>
            <p className="sidebar-copyright">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidebar;