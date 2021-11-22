import { useState, useEffect } from 'react';
console.log("activities")


export default function ActivitiesCall() {
    const [items, setItems] = useState({});
    // console.log(items)
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
 
    useEffect(() => {
      async function userFetch() {
        let response = await fetch("http://localhost:3000/user/18/activities")
       
        if(!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);

        }
      let datas = await response.json()
      setItems(datas)
    
      }
      userFetch()
    }, [])
    return {items}
  }
