import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import './../styles/sass/layout/linechart.scss'
import PropTypes from 'prop-types';



/**
 * Represents a LineChart.
 * @param {object} datasUser - object contain datas user.
 * @param {array} sessions - array contain sessions average.
 * @param {function} CustomTooltip - return display tooltip
 */
export default class Linechart extends PureComponent {
  render() {
    const datasUser = this.props.averageSession
    if(datasUser.items.data !== undefined ) {
      const sessions = datasUser.items.data.sessions
      const CustomTooltip = ({ active, payload }) => {
        if (active) {
      
          return (
            <div className="custom-tooltip_lineChart" >
              <p className="label">{`${payload[0].value}min`}</p>
            </div>
          );
        }
        return null;
      };

        return (
            <ResponsiveContainer width="100%" heigth="100%" >
               <AreaChart
                  width={300}
                  height={200}
                  data={sessions}
                  margin={{top:125, bottom:-30}}
                >
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFF" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#FFF" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  
                  <Area type="monotone" dataKey="sessionLength" stroke="url(#color)" strokeWidth={2}  fill="rgba(255, 255, 255, 0.106534) " activeDot={{ r: 4, fill: "#FFF", strokeWidth: 6, stroke: "rgba(255, 255, 255, 0.6)" }} />
                  <XAxis strokeWidth={0} fontSize={12} stroke="#FFF" opacity={0.6}  dy={-40} dx={0} tickLine={false} tick={{fontSize: 9, angle: 0}} padding={{left:10, right:10}} position="center" />
                  <Tooltip content={<CustomTooltip />} cursor={false}/>

                </AreaChart>
          </ResponsiveContainer>
        );
    }else{
        return null
    }
   
  }
}


Linechart.propTypes = {
  averageSession: PropTypes.object
}
