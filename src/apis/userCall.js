import { useState, useEffect } from 'react';

/**
 * call API for mock datas user
 * @return {object} items- state contain datas of api call
 */
export default function UserCall() {
    const [items, setItems] = useState({});

    useEffect(() => {
      fetch("http://localhost:3000/user/18/")
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
    console.log(items)

    return {items}

  }

 