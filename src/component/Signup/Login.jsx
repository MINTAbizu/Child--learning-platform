// filepath: d:\MERN FULL\github-projects\Child--learning-platform\childlearning\src\component\Login\Login.jsx
import React, { useState } from 'react';
import './Signup.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic here
    alert('Login submitted!');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />

        <button type="submit">Login</button>
         <h2 style={{color:'red', fontSize:'20px'}}>forget password</h2>
      </form>
    </div>
  );
}

export default Login;