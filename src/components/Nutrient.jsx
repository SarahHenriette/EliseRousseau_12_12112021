import React from 'react'
import './../styles/sass/layout/nutrient.scss'
import logo from './../assets/logo.svg'

function Nav(props) {
    return (
      <div className='nutrient'>
          <img src={props.icon} alt=""/>
          <p>{props.value}<br/><span>{props.nutrient}</span></p>
      </div>
    )
}

export default Nav;
