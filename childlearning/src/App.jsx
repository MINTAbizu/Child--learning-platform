import './App.css'
import Header from './component/header/Header'
import LiveClassSession from './component/LiveClassSession'
import Login from './component/Signup/Login'
import Signup from './component/Signup/Signup'
import TeacherSignup from './component/Signup/TeacherSignup'
import Teachears from './component/teachear/Teachears'
import TeacherCard from './component/teachear/TeacherCard'
import Contactpage from './pages/Contactpage'
import Footer from './pages/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonial from './pages/Testimonial'
import PrevoiuStudent from './pages/PrevoiuStudent'

function App() {
  return (
    <Router>
      <Header />
      <div className="clas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TeacherSignup" element={<  TeacherSignup />} />
          <Route path="/Teachears" element={<  Teachears />} />
          <Route path="/Teache" element={<Contactpage/>} />
        
          <Route path="/live-class" element={<LiveClassSession />} />
          {/* <Route path="/Contactpage " element={<Contactpage />} /> */}

        </Routes>
      </div>
      <PrevoiuStudent/>
      <Testimonial/>
         <Testimonial/>
            <Testimonial/>
     <Footer/>
    </Router>
  );
}

export default App;