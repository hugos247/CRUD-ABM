import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export const CreateUser = () => {


  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [bs, setBs] = useState('');


  const [errors, setErrors] = useState({});

  const submitHandler = ( event ) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/createuser', 
    {
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        companyName,
        catchPhrase,
        bs,
    },)
    .then ( (res) => {
        console.log(res, "Llega por then");
        navigate('/');
    })
    .catch( (err) => {
        console.log(err, "Llega por catch");
        setErrors(err.response.data.errors);
    });
}


  return (
    <div className="user-form-container">
      <div className="user-form-container-flex">
        <h2>Add an user</h2>
        <form onSubmit={ submitHandler }>

          <div className="mb-3">
            <label> 
              Name
              <input className="form-control"  onChange={ event => setName( event.target. value) }/>
            </label>
            {errors.name ? <span className='text-danger'> {errors.name.message} </span> : null} <br />
          </div>
          

          <div className="mb-3">
            <label>
              Username
              <input className="form-control"onChange={ event => setUsername( event.target. value) }/>
            </label>
            {errors.username ? <span className='text-danger'> {errors.username.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              Email
              <input className="form-control" type="text"  onChange={ event => setEmail( event.target. value) }/>
            </label>
            {errors.email ? <span className='text-danger'> {errors.email.message} </span> : null} <br />
          </div> <br />

          <div>Address</div> <br />

          <div className="mb-3">
            <label>
              Street
              <input className="form-control" onChange={ event => setStreet( event.target. value) }/>
            </label>
            {errors.street ? <span className='text-danger'> {errors.street.message} </span> : null} <br />
          </div>

          <div>
            <label>
              Suite
              <input className="form-control" onChange={ event => setSuite( event.target. value) }/>
            </label>
            {errors.suite ? <span className='text-danger'> {errors.suite.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              City
              <input className="form-control" onChange={ event => setCity( event.target. value) }/>
            </label>
            {errors.city ? <span className='text-danger'> {errors.city.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              Zipcode
              <input className="form-control" onChange={ event => setZipcode( event.target. value) }/>
            </label>
            {errors.zipcode ? <span className='text-danger'> {errors.zipcode.message} </span> : null} <br />
          </div> <br />

          <div>Geo</div> <br />

          <div>
            <label>
              Lat
              <input className="form-control" onChange={ event => setLat( event.target. value) }/>
            </label>
            {errors.lat ? <span className='text-danger'> {errors.lat.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              Lng
              <input className="form-control" onChange={ event => setLng( event.target. value) }/>
            </label>
            {errors.lng ? <span className='text-danger'> {errors.lng.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              Phone
              <input className="form-control" onChange={ event => setPhone( event.target. value) }/>
            </label>
            {errors.phone ? <span className='text-danger'> {errors.phone.message} </span> : null} <br />
          </div>

          <div>
            <label>
              Website
              <input className="form-control" onChange={ event => setWebsite( event.target. value) }/>
            </label>
            {errors.website ? <span className='text-danger'> {errors.website.message} </span> : null} <br />
          </div> 


          <div>Company</div> 

          <div className="mb-3">
            <label>
              Company Name
              <input className="form-control" onChange={ event => setCompanyName( event.target. value) }/>
            </label>
            {errors.companyName ? <span className='text-danger'> {errors.companyName.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              CatchPhrase
              <input className="form-control" onChange={ event => setCatchPhrase( event.target. value) }/>
            </label>
            {errors.catchPhrase ? <span className='text-danger'> {errors.catchPhrase.message} </span> : null} <br />
          </div>

          <div className="mb-3">
            <label>
              Bs
              <input className="form-control" onChange={ event => setBs( event.target. value) }/>
              {errors.bs ? <span className='text-danger'> {errors.bs.message} </span> : null} <br />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>

    </div>
  )
}
