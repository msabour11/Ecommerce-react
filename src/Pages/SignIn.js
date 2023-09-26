import React, { useState } from 'react';

function SignIn() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!loginData.username) {
      errors.username = 'Username is required';
    }

    if (!loginData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Check if user data matches data in local storage
      const storedData = JSON.parse(localStorage.getItem(loginData.username));
      if (storedData && storedData.password === loginData.password) {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
      // You can add more validation and error handling here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
            value={loginData.username}
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            value={loginData.password}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
