import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    const performance = this.props.performance
    if(performance.items.data !== undefined ) {
        console.log(performance)
        const da = performance.items.data.data
        const kind = performance.items.data.kind
        const kindFormatter = (item) => kind[item.kind].charAt(0).toUpperCase() + kind[item.kind].slice(1);
        console.log(kind)

        return (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={da} margin={{left:25, right:25}}>
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
