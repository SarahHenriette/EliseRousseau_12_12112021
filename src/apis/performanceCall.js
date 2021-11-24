import { useState, useEffect } from 'react';
console.log("performance")


export default function PerformanceCall() {
    const [items, setItems] = useState({});
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
 
    useEffect(() => {
      async function userFetch() {
        let response = await fetch("http://localhost:3000/user/18/performance")
       
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
