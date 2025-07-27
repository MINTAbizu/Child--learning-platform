import React, { useState } from 'react';
import '../Signup/Signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    username: '',
    firstName: '',
    lastName: '',
    grade: '',
    candidate: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Navigate to TeacherSignup if candidate is teacher
    if (e.target.name === 'candidate' && e.target.value === 'teacher') {
      navigate('/TeacherSignup');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Signup submitted!');
  };

  return (
    <div className="form-container ">
      <div className="">
        <h2>Signup</h2>
        <p>
          If you have an account just{' '}
          <span style={{ color: 'greenyellow', fontSize: '20px' }}>
            <Link to={'/login'}>Login</Link>
          </span>
        </p>
        <form onSubmit={handleSubmit} className="row">

             <div className="mb-3">
            <hr />
            <label>Candidates</label>
            <select
              name="candidate"
              className="form-control"
              value={form.candidate}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div className="mb-3">
            <label>User-name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>First-Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Last-Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Choose-Grade</label>
            <select
              name="grade"
              className="form-control"
              value={form.grade}
              onChange={handleChange}
              required
            >
              <option value="">Select Grade</option>
              <option value="Grade-5">Grade-5</option>
              <option value="Grade-6">Grade-6</option>
              <option value="Grade-7">Grade-7</option>
              <option value="Grade-8">Grade-8</option>
              <option value="Grade-9">Grade-9</option>
              <option value="Grade-10">Grade-10</option>
              <option value="Grade-11">Grade-11</option>
              <option value="Grade-12">Grade-12</option>
            </select>
          </div>
         
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;