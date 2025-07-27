// Example: Teacher Registration Form
import React, { useState } from 'react';

function TeacherSignup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    title: '',
    subjects: '',
    experience: '',
    qualification: '',
    bio: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Teacher registration submitted!');
  };

  return (
    <div className="form-container">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />

        <label>Last Name</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />

        <label>Country/Region</label>
        <input type="text" name="country" value={form.country} onChange={handleChange} required />

        <label>Professional Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required />

        <label>Subjects Taught</label>
        <input type="text" name="subjects" value={form.subjects} onChange={handleChange} required />

        <label>Years of Experience</label>
        <input type="number" name="experience" value={form.experience} onChange={handleChange} required />

        <label>Highest Qualification</label>
        <input type="text" name="qualification" value={form.qualification} onChange={handleChange} required />

        <label>Short Bio</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TeacherSignup;