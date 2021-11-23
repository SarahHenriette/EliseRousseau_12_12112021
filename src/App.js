// import logo from './logo.svg';
// import { useState, useEffect } from 'react';

import './styles/sass/pages/App.scss';
import './apis/userCall.js'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Nutrient from './components/Nutrient'
import BarreChart from './components/BarreChart'
import LineChart from './components/LineChart'

import UserCall from './apis/userCall'
import ActivityCall from './apis/activityCall'
import AverageSessionCall from './apis/averageSessionCall'
// import TodayScorenCall from './apis/todayScoreCall'
import iconCalories from './assets/icons/calories-icon.svg'
import iconProtein from './assets/icons/protein-icon.svg'
import iconCarbs from './assets/icons/carbs-icon.svg'
import iconLipide from './assets/icons/fat-icon.svg'

// import ActivitiesCall from './apis/activitiesCall'
// import KeyDataCall from './apis/keyDataCall'


function App() {

const infosUser = UserCall()
const activity = ActivityCall()
const averageSession = AverageSessionCall()
// const todayScore = TodayScorenCall()
// const activities = ActivitiesCall()
// const keyDatan = KeyDataCall()

if(infosUser.items.data !== undefined ) {
  const user = infosUser.items.data
  console.log(infosUser)
  // console.log(activity)
  console.log(averageSession)
  // console.log(todayScore)
  // console.log(activities)
  // console.log(keyDatan)


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
