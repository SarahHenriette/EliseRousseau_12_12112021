import { useState, useEffect } from 'react';

/**
 * call API for mock datas performance user
 * @param {object} items- state contain datas of api call
 * @param {response} response- mock datas with fetch
 * @param {object} datas- get the datas in json format
 */
export default function PerformanceCall() {
    const [items, setItems] = useState({});
  
    useEffect(() => {
      fetch("http://localhost:3000/user/18/performance")
      .then(response => response.json())
      .then(
        (result) => {
          setItems(result)
        }, 
        (error) => {
          throw new Error(`Erreur HTTP ! statut : ${error}`);
        }
      )
    }, [])

    return {items}
  }
