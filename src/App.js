import './styles/sass/pages/App.scss';
import './apis/userCall.js'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Nutrient from './components/Nutrient'
import BarreChart from './components/graphics/BarChart'
import LineChart from './components/graphics/LineChart'
import RadarChart from './components/graphics/RadarChart'
import RadialChart from './components/graphics/RadialChart'

import UserCall from './apis/userCall'
import ActivityCall from './apis/activityCall'
import AverageSessionCall from './apis/averageSessionCall'
import PerformanceCall from './apis/performanceCall'

import iconCalories from './assets/icons/calories-icon.svg'
import iconProtein from './assets/icons/protein-icon.svg'
import iconCarbs from './assets/icons/carbs-icon.svg'
import iconLipide from './assets/icons/fat-icon.svg'


/**
 * represents display application
 * @param {object} infosUser- contain datas of user
 * @param {object} activity- contain datas of activity user
 * @param {object} averageSession- contain datas of average session user
 * @param {object} performance- contain datas of performance user
 */
function App() {

const infosUser = UserCall()
const activity = ActivityCall()
const averageSession = AverageSessionCall()
const performance = PerformanceCall()
  if(infosUser.items.data !== undefined ) {
    const user = infosUser.items.data

    return (
      <div className="App">
          <Nav/>
          <div className="App-dashboard">
            <Sidebar/>
            <main>
              <Header infosUser= {user.userInfos}/>
              <div className="infos">
                <div className="infos-graphics">
                  <div className="infos-graphics_barchart">
                    <h2 className="barchart-title">Activité quotidienne</h2>
                    <div className="barchart-legend">
                      <p className="barchart-legend_poids barchart-legendName"><span className="barchart-legendName_circle"></span>Poids (kg)</p>
                      <p className="barchart-legend_calories barchart-legendName"><span className="barchart-legendName_circle"></span>Calories brûlées (kCal)</p>
                    </div>
                    <BarreChart activity={activity}/>
                  </div>
                  <div className="infos-graphics_other">
                      <div className="linechart">
                        <h2 className="linechart-title">Durée moyenne des sessions</h2>
                        <LineChart averageSession={averageSession}/>
                      </div>
                      <div className="radarchart">
                        <RadarChart performance={performance}/>
                      </div>
                      <div className="radialchart">
                        <h2 className="radialchart-title">Score</h2>
                        <RadialChart infoScore= {user}/>
                      </div>
                  </div>
                </div>
                <div className="infos-nutrients">
                  <Nutrient icon={iconCalories} value={user.keyData.calorieCount +`kcal`} nutrient="Calories"/>
                  <Nutrient icon={iconProtein} value={user.keyData.proteinCount +`g`} nutrient="Proteines"/>
                  <Nutrient icon={iconCarbs} value={user.keyData.carbohydrateCount +`g`} nutrient="Glucides"/>
                  <Nutrient icon={iconLipide} value={user.keyData.lipidCount +`g`} nutrient="Lipides"/>
                </div>
              </div>
            </main>
          </div>
      </div>
    );
  }else {
    return null
  }
}

export default App;
