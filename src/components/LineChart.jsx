import React, { PureComponent } from 'react';
import { AreaChart, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine} from 'recharts';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import ActivityCall from './../apis/activityCall'

// import './../styles/sass/layout/barchart.scss'
const days = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D"
}
const dayFormatter = (item) => days[item.day];



export default class Example extends PureComponent {
  render() {
    const averageSession = this.props.averageSession
    
    if(averageSession.items.data !== undefined ) {
      const sessions = averageSession.items.data.sessions

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
                  <XAxis dataKey={dayFormatter} strokeWidth={0} fontSize={12} stroke="#FFF" opacity={0.6}  dy={-40} dx={0} tickLine={false} tick={{fontSize: 9, angle: 0}} padding={{left:10, right:10}} position="center" />
                  <Tooltip wrapperStyle={{ backgroundColor: "#FFF" }} labelStyle={{ fontSize:0 }} itemStyle={{ color: "#000" }} cursor={false}/>

                </AreaChart>
          </ResponsiveContainer>
        );
    }else{
        return null
    }
   
  }
}