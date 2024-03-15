
import React, {useState} from 'react'
import axios from 'axios'
import './Register.css'

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email : '',
    password : '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('login_api_call', userDetails);
        console.log(response);
        if(response.data.token)
            localStorage.setItem('token', response.data.token);
    }
    catch (err) {
        console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
        ...userDetails,
        [name] : value,
    });
  };
  
  return (
    <div className='login-container'>
      <div className='login-header'>
        <h1>
            REGISTER
        </h1>
      </div>
      <div className='login-inputs'>
            <input 
                type='text' 
                placeholder='NAME' 
                className='login_input'
                onChange={handleChange}
                required
            />  
            <div className='emails'>
                <input 
                    type='text' 
                    placeholder='EMAIL' 
                    className='login_input'
                    onChange={handleChange}
                    required
                />  
                <input 
                    type='text' 
                    placeholder='ALT EMAIL' 
                    className='login_input'
                    onChange={handleChange}
                    required
                 />  
            </div>
            <input 
                type='text' 
                placeholder='PASSWORD' 
                className='login_input'
                onChange={handleChange}
                required
            />
        <button>
            SUBMIT
        </button>
      </div>
      <div className='login-footer'>

      </div>
    </div>
  )
}

export default Register
