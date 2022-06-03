import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'



export  function Detail() {

    const param = useParams()
    const {id} = param
    const [full, setfull] = useState(null)
    
    useEffect( () => {
        const url = 'http://localhost:1234/api/products/' + id+'/'

        const fetchdata = async () => {

            try{
                // const data = await fetch(url)
                // const final = await data.json()
                const final = await axios.get(url)
                console.log(final)
                setfull(final)

            } catch(err){
                console.log('My Error')
                console.log(err.response.data)
            }
            
        }   
        fetchdata() 
    }, [])

  return (
      <div>
          <center>
              {full && <div>
                <h1>{id}</h1>
                <p>{full.name}</p>
              </div>
              }
              
          </center>
      </div>
   );
}
