import { useState, useEffect } from 'react';

/**
 * call API for mock datas performance user
 * @return {object} items - state contain datas of api call
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
