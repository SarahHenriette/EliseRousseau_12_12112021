import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import ActivityCall from './../apis/activityCall'

// import './../styles/sass/layout/barchart.scss'

export default class Example extends PureComponent {
  render() {
    const averageSession = this.props.averageSession
    
    if(averageSession.items.data !== undefined ) {
        console.log(averageSession)
      const sessions = averageSession.items.data.sessions

        return (
            <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={sessions}  margin={{top:150}}>
              <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2}  layout="vertical" opacity={0.5}/>
              <XAxis dataKey="day" strokeWidth={0} margin={{left:15, right:15}}/>
            </LineChart>
          </ResponsiveContainer>
        );
    }else{
        return null
    }
   
  }
}