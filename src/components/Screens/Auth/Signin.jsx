import React, {useState, useEffect} from 'react';
import './Auth.css'
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {


    const [token, settoken] = useState('');
    useEffect(() => {
        token.length !== 0 ?
        localStorage.setItem('jwt-Token', token ):
        localStorage.setItem('jwt-Token', token )
    })


    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    

    const handleChange = e => {
        setformData(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value,      
        }));
      };

      const handleClick = () => {

        axios.post('http://localhost:5000/api/v1/user/loginCustomer', {
            email: formData.email,
            password: formData.password,
        })
        .then(function (response) {
            settoken(response.data.token)
        console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    return (
        <div>
             {
            token.length !==0 &&
            <Navigate to="/" />
            }
            <Link to="/signup">Sign up</Link>
            <div className='d-flex justify-content-center'>
            <div className='mt-2 signup_form '>
                <h1 className='text-center'>Sign in</h1>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name='email' onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" name='password' onChange={handleChange} className="form-control"/>
                </div>
            <button className='btn btn-outline-success' onClick={handleClick}  >Sign in</button>
            </div>
            </div>
        </div>
    );
}

export default Signin;
