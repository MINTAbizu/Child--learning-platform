import './assets/App.css'
import Header from './component/header/Header'
import LiveClassSession from './component/LiveClassSession'
import Login from './component/Signup/Login'
import Signup from './component/Signup/Signup'
import TeacherSignup from './component/Signup/TeacherSignup'
import Teachears from './component/teachear/Teachears'
// import Contactpage from './pages/Contactpage'
import Footer from './pages/Footer'
// import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Testimonial from './pages/Testimonial'
import PrevoiuStudent from './pages/PrevoiuStudent'
import TeacherDashboard from './component/Dashboard/TeacherDashboard'
import LandingPage from './pages/Landingpages/LandingPages'
import AdminDashboard from './Admin/AdminDashboard'
import AllGrades from './component/Grades/AllGrades'
import UploadMaterial from './component/teachear/UploadMaterial'
import Benefits from './component/teachear/Benefits'
import G5math from './component/Grades/Courses/math/G5math'
import BookTecheares from './component/teachear/BookTecheares'
import TeacherSidebar from './component/teachear/teachearsidebar/TeacherSidebar'
import Resources from './component/Dashboard/techearall/Resources'
import Messages from './component/Dashboard/techearall/Messages'
import Assignments from './component/Dashboard/techearall/Assignments'
import Analytics from './component/Dashboard/techearall/Analytics'
// import Classs from './component/Dashboard/techearall/Classs'
import Profile from './component/Dashboard/techearall/Profile'
import Students from './component/Dashboard/techearall/Students'
import Classs from './component/Dashboard/techearall/Classs'


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
          {/* <Route path="/Teache" element={<Contactpage />} /> */}
          <Route path="/live-class" element={<LiveClassSession />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/students" element={<PrevoiuStudent />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/AllGrades" element={<AllGrades/>} />
          <Route path="/UploadMaterial" element={<UploadMaterial/>} />
          <Route path="/G5math" element={<G5math/>} />
          <Route path="/UploadMaterial" element={<UploadMaterial/>} />
          <Route path="/BookTecheares" element={<BookTecheares/>} />
          {/* <Route path="/TeacherSidebar" element={<TeacherSidebar/>} /> */}
               <Route  path='/resourses' element={<Resources/>}/>
               <Route  path='/Messages' element={<Messages/>}/>
               <Route  path='/Analytics' element={<Analytics/>}/>
               <Route  path='/Profile' element={<Profile/>}/>
               <Route  path='/Studentssss' element={<Students/>}/>
               <Route  path='/Assignments' element={<Assignments/>}/>
               <Route  path='/Classs' element={<Classs/>}/>

        </Routes>
      </div>
    

      <Footer />
    </>
  )
}

export default App;