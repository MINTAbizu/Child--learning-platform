import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Signup/Signup.css';
import { useAuth } from '../../Auth/Authservies.jsx';


function Signup() {
  const  {register}=useAuth()
  const [form, setForm] = useState({
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    grade: '',
    candidate: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));

    // Navigate to TeacherSignup if candidate is teacher
    if (name === 'candidate' && value === 'teacher') {
      navigate('/TeacherSignup');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await  register({
         username:form.username,
    fname: form.fname,
    lname: form.lname,
    email: form.email,
    password: form.password,
    grade: form.grade,
    candidate: form.candidate
      })
      // const response = await axios.post('http://localhost:3000/student/student/register', form);
      alert(response.data.msg); // Show success message
    const studentName = form.fname;
    const studentgrade = form.grade;
      // Redirect based on selected grade
      switch (form.grade) {
        case 'Grade-5':
          navigate('/AllGrades',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-6':
          navigate('/Grade6',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-7':
          navigate('/Grade7' ,{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-8':
          navigate('/Grade8',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-9':
          navigate('/Grade9',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-10':
          navigate('/Grade10',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-11':
          navigate('/Grade11',{ state: { studentName } , studentgrade: form.grade });
          break;
        case 'Grade-12':
          navigate('/Grade12',{ state: { studentName } , studentgrade: form.grade });
          break;
        default:
          navigate('/login'); // Fallback if no grade matches
          break;
      }
    } catch (error) {
      console.error('Error during signup:', error.response ? error.response.data : error.message);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div>
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
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              value={form.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              value={form.lname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Choose Grade</label>
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