import './App.css'
import Header from './component/header/Header'
import LiveClassSession from './component/LiveClassSession'
import Login from './component/Signup/Login'
import Signup from './component/Signup/Signup'
import TeacherSignup from './component/Signup/TeacherSignup'
import Teachears from './component/teachear/Teachears'
import Contactpage from './pages/Contactpage'
import Footer from './pages/Footer'
// import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Testimonial from './pages/Testimonial'
import PrevoiuStudent from './pages/PrevoiuStudent'
import TeacherDashboard from './component/Dashboard/TeacherDashboard'
import LandingPage from './pages/Landingpages/LandingPages'

function App() {
  return (
    <>
      <Header />
      <div className="clas">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TeacherSignup" element={<TeacherSignup />} />
          <Route path="/Teachears" element={<Teachears />} />
          <Route path="/Teache" element={<Contactpage />} />
          <Route path="/live-class" element={<LiveClassSession />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/students" element={<PrevoiuStudent />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;