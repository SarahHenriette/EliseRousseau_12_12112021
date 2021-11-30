import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import './../styles/sass/layout/radarchart.scss'


/**
 * Represents a Radarchart.
 * @param {object} datasUser - object contain datas user.
 * @param {array} datas - array contain datas radial chart.
 * @param {object} kind - contain kind.
 * @param {function} kindFormatter - return the kind with first letter in uppercase.
 * 
 */
export default class Radarchart extends PureComponent {

  render() {
    const datasUser = this.props.performance
    if(datasUser.items.data !== undefined ) {
        const datas = datasUser.items.data.data
        const kind = datasUser.items.data.kind
        const kindFormatter = (item) => kind[item.kind].charAt(0).toUpperCase() + kind[item.kind].slice(1);
        return (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas} margin={{left:25, right:25}}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis  dataKey={kindFormatter} fontSize={10} stroke="#FFF" tickLine={false}/>                
                <Radar dataKey="value" stroke="#8884d8" strokeWidth={0} fill="#FF0101" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          );
    }else {
        return null
    }
    
  }
}

Radarchart.propTypes = {
  performance: PropTypes.object
}