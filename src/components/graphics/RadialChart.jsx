import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';
import './../../styles/sass/layout/radialchart.scss'


/**
 * Represents a Radarchart.
 * @const {object} score - object contain datas user.
 * @const {number} pourcentScore - calcul score in pourcentage.
 * @const {number} degreScore - calcul score pourcentage in degre.
 * @const {array} data - return text contain of legend and infos in radial bar.
 * @const {object} style - contain style of legend 
 * @return RadialChart
 * 
 */
export default class Radialchart extends PureComponent {
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
    const style = {
      top: '50%',
      right: 0,
      transform: 'translate(0, -50%)',
      lineHeight: '24px',
    };
    console.log(style)

    
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

Radialchart.propTypes = {
  infoScore: PropTypes.object
}