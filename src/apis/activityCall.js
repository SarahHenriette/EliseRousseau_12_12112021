import { useState, useEffect } from 'react';

/**
 * call API for mock datas activity user
 * @param {object} items- state contain datas of api call
 * @param {response} response- mock datas with fetch
 * @param {object} datas- get the datas in json format
 */
export default function ActivityCall() {
    const [items, setItems] = useState({});

    useEffect(() => {
      async function userFetch() {
        let response = await fetch("http://localhost:3000/user/18/activity")
       console.log(response)
        if(!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);

        }
      let datas = await response.json()
             console.log(datas)

      setItems(datas)
    
      }
      userFetch()
    }, [])
    return {items}
  }

