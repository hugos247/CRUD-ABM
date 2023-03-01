import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


export const DeleteUser = () => {
    //edicion de objeto
    const [user, setUser] = useState({});

    //Obtener ID de URL
    const { id } = useParams();
    const navigate = useNavigate();


    //No se puede obtener porque genera un error de tipo cast 

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/getuser/${id}`)
        .then ( (res) =>{
          console.log(res);
          setUser(res.data);
        })
        .catch( (err) => {
          console.log(err);
        })
      },[])

      const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/deleteuser/${id}`)
        .then ( (res) => {
          console.log(res);
          navigate('/');
        })
        .catch ( (err) => {
          console.log(err);
        })
      }


  return (
    <div>
        <p> Name: {user.name} </p>
        <p> Username: {user.username} </p>
        <p> Email: {user.email} </p>
        {/* <Link to={`/editarserie/${id}`} > Editar Serie </Link> */}
        <button className="btn btn-danger" onClick={ handleDelete }> Delete user </button>
    </div>
  )
}
