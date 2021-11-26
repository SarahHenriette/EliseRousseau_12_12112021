import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import './../styles/sass/layout/radialchart.scss'


const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';


  render() {
    const score = this.props.infoScore
    const pourcentScore = score.score*100 
    const degreScore = 360* pourcentScore/100
    const data = [
      {
        name: <p className="radialchart-text"><span>{pourcentScore}%</span> de votre objectif</p>,
        pourcent: pourcentScore,
        fill: '#FF0000',
      },
    ]

    console.log(degreScore)
    return(
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="100%" barSize={7} data={data}  startAngle={90} endAngle={90 + degreScore}  strokeWidth={15}>
        <RadialBar
          minAngle={100}
          background
          dataKey="pourcent"
          barSize={10}
          paddingAngle={15}
          cornerRadius={15}
        />
        <Legend iconSize={0} layout="horizontal" horizontalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    </ResponsiveContainer>
    );
  }
}
