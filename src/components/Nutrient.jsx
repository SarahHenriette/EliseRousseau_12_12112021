import React from 'react'
import PropTypes from 'prop-types';
import './../styles/sass/layout/nutrient.scss'

/**
 * Represents navigations of application.
 * @param {string} props.icon- image url.
 * @param {string} props.nutrient- name of nutrient.
 * @return nutrient
 */
function Nutrient(props) {
    return (
      <div className='nutrient'>
          <img src={props.icon} alt=""/>
          <p>{props.value}<br/><span>{props.nutrient}</span></p>
      </div>
    )
}


Nutrient.propTypes = {
  icon: PropTypes.string,
  nutrient: PropTypes.string
}


export default Nutrient;
