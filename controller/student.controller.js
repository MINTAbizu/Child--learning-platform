const student = require('../model/student.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  const { fname, lname, email, password, grade } = req.body;
  try {
    // Check all fields exist
    if (!fname || !lname || !email || !password || !grade) {
      return res.status(400).json({ msg: "Please provide all required fields" });
    }

    // Check if user exists
    const findstudentexisted = await student.findOne({ email });
    if (findstudentexisted) {
      return res.status(400).json({ msg: "User already registered !!!" });
    }

    // Password hashing
    const gensalt = await bcrypt.genSalt(10);
    const passwordhashed = await bcrypt.hash(password, gensalt);

    // Save student
    
    const newStudent = new student({
      fname,
      lname,
      email,
      password: passwordhashed,
      grade
    });
    await newStudent.save();

    res.status(200).json({ msg: "Student registered successfully", student: newStudent });
  } catch (error) {
    return res.status(500).json(error);
  }
};



  const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findstudent = await student.findOne({ email });
    if (!findstudent) {
      return res.status(400).json({ msg: "User not found !!!" });
    }
    const isMatch = await bcrypt.compare(password, findstudent.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials !!!" });
    }
    // Generate JWT
    const payload = { id: findstudent._id, email: findstudent.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ msg: "Login successful", token, student: findstudent });
  } catch (error) {
    return res.status(500).json(error);
  }
};

  module.exports= {
  register,
  login
}