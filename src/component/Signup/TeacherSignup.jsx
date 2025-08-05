// Example: Teacher Registration Form
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { set } from 'mongoose';
function TeacherSignup() {
 
  const [firstName,setfirstname]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [phone,setphone]=useState('')
  const [country,setcountry]=useState('')
  const [title,settitle]=useState('')
  const [subjects,setsubjects]=useState('')
  const [experience,setexperience]=useState('')
  const [qualification,setqualification]=useState('')
  const [bio,setbio]=useState('')
  //error
    const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [servererror, setservererror] = useState('');

  

  const handleSubmit = async(e) => {
    e.preventDefault();
      let flag = true;

    // Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!firstName){
        setEmailError("firstname required")
      flag=false

    }
      if(!lastName){
        setEmailError("lastname required")
      flag=false

    }
    if(!email){
      setEmailError("email required")
      flag=false
    }else if(!emailPattern.test(email)){
      setEmailError("email pattern is not format")
      flag=false
    }else{
      setEmailError("")
    }
    if(!password){
      setPasswordError("password required")
      flag=false;
    }else if(password.length>6){
      setPasswordError("password must be greater than 6 character")
      flag=false

    }else if (!/(?=.*[a-z])/.test(password)){
      setPasswordError("password must be include lower case character")
      flag=false

    }else if (!/(?=.*[A-Z])/.test(password)){
   
      setPasswordError("password must be include lower case character")
         flag=false

    } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
      setPasswordError('Password must include a special character');
      flag = false;
    } else {
      setPasswordError('');
    }
   
    if (!flag) return;
    


       const formdata = {
           FirstName:firstName,
Lastname:lastName,
Email:email,
Password:password, 
PhoneNumber:phone,
CountryorRegion:country,
ProfessionalTitle:title,
SubjectsTaught:subjects,
YearsofExperience:experience,
HighestQualification:qualification,
ShortBio:bio

  };
  try {
    const response = await fetch('http:/localhost:5000/teachearrigsteration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    });
    const data = await response.json();
    console.log(data)
   if (response.ok) {
  // Save employee info in localStorage for later use (e.g., in header)
const employee = {
  employee_token: data.token,
  employee_id: data.employee_id,
  employee_first_name: data.firstname, // use 'firstname' from backend
  employee_role: data.company_role_id,
};
localStorage.setItem('employee', JSON.stringify(employee));
  setSuccess('Login successful');
  setError('');
  setTimeout(() => {
    navigate('/Admin/addEmploye'); // Redirect to dashboard after successful login
  }, 2000);
} else {
  setError(data.error || 'Login failed');
  setSuccess('');
}
  }
  catch (error) {
    // console.error('Error during registration:', error);
    setservererror('Server error, please try again later');
    setSuccess('');
  }


  
  }

  return (
    <div className="flex-grow-1 p-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="mb-4 text-center text-primary">Teacher Registration</h2>
                  <form  onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>First Name</label>
                        <input type="text" name="firstName" className="formcontrol"
                         value={firstName} onChange={(e)=>setfirstname(e.target.value)} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Last Name</label>
                        {emailError && <div>{emailError}</div>}
                        <input type="text" name="lastName" className="form-control"
                        
                         value={lastName} onChange={(e)=>setlastName(e.target.value)} required />

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                       {emailError&& <div>{emailError}</div>}
                        <input type="email" name="email" className="form-control"
                         value={email} onChange={(e)=>setemail(e.target.value)} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Password</label>
                        {passwordError&&<div>{passwordError}</div>}
                        <input type="password" name="password" className="form-control" 
                        value={password} onChange={(e)=>setpassword(e.target.value)} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="form-control"
                         value={phone} onChange={(e)=>setphone(e.target.value)} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Country/Region</label>
                        <input type="text" name="country" className="form-control"
                         value={country} onChange={(e)=>setcountry(e.target.value)} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Professional Title</label>
                        <input type="text" name="title" className="form-control"
                         value={title} onChange={(e)=>settitle(e.target.value)} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Subjects Taught</label>
                        <input type="text" name="subjects" className="form-control" 
                        value={subjects} onChange={(e)=>setsubjects(e.target.value)} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Years of Experience</label>
                        <input type="number" name="experience" className="form-control"
                         value={experience} onChange={(e)=>setexperience(e.target.value)} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Highest Qualification</label>
                        <input type="text" name="qualification" className="form-control" 
                        value={qualification} onChange={(e)=>setqualification(e.target.value)} required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>Short Bio</label>
                      <textarea name="bio" className="form-control"
                      value={bio} onChange={(e)=>setbio(e.target.value)} rows={3} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
  );
}

export default TeacherSignup;