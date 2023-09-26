import React, { useState } from 'react';

function SignUp() {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!userData.username.trim() ) {
      errors.username = 'Username is required';
    }

    if (!userData.email.trim() ) {
      errors.email = ' email address is required';
    }

    else if (!userData.email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
        errors.email = 'Invalid email address';
      }
  

    

    if (!userData.password.trim() ) {
      errors.password = 'Password is required';
    }

   else if (userData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      // Save user data to local storage
      localStorage.setItem(userData.username, JSON.stringify(userData));
      // You can add more validation and error handling here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
            value={userData.username}
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            value={userData.email}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}


export default SignUp;
