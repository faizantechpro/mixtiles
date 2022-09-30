import React, {useEffect, useState} from 'react';
import {Link, Navigate, Redirect } from 'react-router-dom'
import axios from 'axios'
import './Auth.css'

const Signup = () => {


    const [basicInfo, setbasicInfo] = useState(true);
    const [addressInfo, setaddressInfo] = useState(false);
    const [err, setErr] = useState("");
    const [setToken, setsetToken] = useState('');

    useEffect(() => {
        setToken.length !== 0 ?
        localStorage.setItem('jwt-Token', setToken ) :
        localStorage.setItem('jwt-Token', setToken)
    })

    const [formData, setformData] = useState({
        fullname: "",
        email: "",
        password: "",
        address: "",
        address2:"",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        userType:""
    });

    const handleChange = e => {
        setformData(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value,      
        }));
      };
      const handleClick = () => {

        axios.post('http://localhost:5000/api/v1/user/signupUser', {
            fullName: formData.fullname,
            email: formData.email,
            password: formData.password,
            shippingAddress: {
                address: formData.address,
                address2:  formData.address,
                city:  formData.city,
                state:  formData.state,
                zipCode:  formData.zipCode,
                country: formData.country
            },
            userType:"CUSTOMER"
        })
        .then(function (response) {
        setErr("")
        setsetToken(response.data.token);
        })
        .catch(function (error) {
          setErr(error.response.data.error);
        });
      };

    return (
        <div>
            {
            setToken.length !==0 &&
            <Navigate to="/" />
            }
            <Link to="/">GO Back</Link>
            <div className='d-flex justify-content-center'>
                { basicInfo && (
                   
            <div className='mt-2 signup_form '>
                <h1 className='text-center'>Signup</h1>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" name='fullname' onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name='email' onChange={handleChange} className="form-control"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" name='password' onChange={handleChange} className="form-control"/>
                </div>
            <button className='btn btn-outline-success' onClick={()=>setbasicInfo(false) & setaddressInfo(true)} >next</button>
            </div>
            
                )
                }
                {
                    addressInfo && (
                        <div className='mt-2 signup_form '>
                     <h1 className='text-center'>Address Info</h1>
                    <button className='btn btn-outline-info mb-4' onClick={()=>setbasicInfo(true) & setaddressInfo(false)} >Go Back</button>
                     <div className="mb-3">
                       <label className="form-label">Address</label>
                       <input type="text" name='address' onChange={handleChange} className="form-control"/>
                     </div>
                     <div className="mb-3">
                       <label className="form-label">Address 2</label>
                       <input type="email" name='address2'  onChange={handleChange} className="form-control"/>
                     </div>
                     <div className="mb-3">
                       <label className="form-label">City</label>
                       <input type="" name='city'  onChange={handleChange} className="form-control"/>
                     </div>
                     <div className="mb-3">
                       <label className="form-label">State</label>
                       <input type="" name='state'  onChange={handleChange} className="form-control"/>
                     </div>
                     <div className="mb-3">
                       <label className="form-label">Zip Code</label>
                       <input type="" name='zipCode'  onChange={handleChange} className="form-control"/>
                     </div>
                     <div className="mb-3">
                       <label className="form-label">Country</label>
                       <input type="" name='country'  onChange={handleChange} className="form-control"/>
                     </div>

                     {

                        err &&
                       
                            <p className='text-danger'>{err} </p>
                        
                        
                     }

                     
                 <button className='btn btn-success' onClick={handleClick}  >Sign up</button>
                 </div>
                )}
            </div>
        </div>
    );
}

export default Signup;
