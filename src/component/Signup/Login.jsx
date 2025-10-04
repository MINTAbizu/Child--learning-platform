import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required");
      flag = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      flag = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      flag = false;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must include a lowercase character");
      flag = false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must include an uppercase character");
      flag = false;
    } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
      setPasswordError('Password must include a special character');
      flag = false;
    } else {
      setPasswordError('');
    }

    if (!flag) return;

    const formdata = { email, password };

    try {
      const response = await fetch('http://localhost:3000/teacher/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();

       if (response.ok) {
    setSuccess('Login successful');
    navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        setError(data.msg || 'Login failed');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(e) => setemail(e.target.value)} 
          required 
        />
        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setpassword(e.target.value)} 
          required 
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}

        <button type="submit">Login</button>
      </form>
      <h2 style={{ color: 'red', fontSize: '20px' }}>Forgot Password?</h2>
    </div>
  );
}

export default Login;