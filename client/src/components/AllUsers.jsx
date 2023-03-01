import axios from 'axios';
import { useState, useEffect } from 'react';

export const AllUsers = () => {

    const [list, setList ] = useState([]);
    const [defaultList, setDefaultList ] = useState([]);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then ( ( res ) => {
            console.log( res );
            setDefaultList( res.data );
        })
        .catch ( ( error ) => {
            console.log( error )
        })
    }, [])

    useEffect( () => {
        axios.get(`http://localhost:8000/api/getusers`)
        .then ( ( res ) => {
            console.log( res );
            setList( res.data );
        })
        .catch ( ( error ) => {
            console.log( error )
        })
    }, [])

  return (
    <>

        <div>
            {
                defaultList.map( (users, index ) => (
                    <div key={ index }>
                        <h1>{ users.name }</h1>
                    </div>
                ))
            }
        </div>

        <div>
            {
                list.map( (users, index ) => (
                    <div key={ index }>
                        <h1>{ users.name }</h1>
                    </div>
                ))
            }
        </div>
    </>

    
  )
}
