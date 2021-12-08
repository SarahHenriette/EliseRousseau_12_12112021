import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import './../../styles/sass/layout/barchart.scss'


/**
 * Represents a Barchart.
 * @const {object} datasUser - object contain datas user.
 * @const {array} sessions - array contain sessions activity.
 * @func dayFormatter - return the day of week
 * @func  CustomTooltip - return display tooltip
 * @return Barchart
 */
export default class Barchart extends PureComponent {
  render() {
    const datasUser = this.props.activity
    if(datasUser.items.data !== undefined ) {
      const sessions = datasUser.items.data.sessions
      const dayFormatter = (item) => item.day.split("-")[2];
      const CustomTooltip = ({ active, payload }) => {
        if (active) {
          return (
            <div className="custom-tooltip_barchart" >
              <p className="label">{`${payload[0].value}kg`}</p>
              <p className="intro">{`${payload[1].value}kcal`}</p>
            </div>
          );
        }
      
        return null;
      };

      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sessions}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey={dayFormatter} tickLine={false}/>
            <YAxis orientation="right" tickLine={false} tickCount={3}/>
            <Tooltip  content={<CustomTooltip />} />
            <Bar dataKey="kilogram" barSize={7} fill="#282D30" radius={[10, 10, 0, 0]}/>
            <Bar dataKey="calories" barSize={7}  fill="#E60000"  radius={[10, 10, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      );
    }else {
      return null
    }
  }
}

Barchart.propTypes = {
  activity: PropTypes.object
}
