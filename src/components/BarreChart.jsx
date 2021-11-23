import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import ActivityCall from './../apis/activityCall'

import './../styles/sass/layout/barchart.scss'


export default class Example extends PureComponent {
  render() {
   
    const activity = this.props.activity
    
    if(activity.items.data !== undefined ) {
      // console.log(activity.items.data.sessions)
      const sessions = activity.items.data.sessions
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="day"/>
            <YAxis orientation="right"/>
            <Tooltip />
            {/* <Legend width="80%" layout="horizontal" verticalAlign="top" align="end" /> */}
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

