import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dummy content for demonstration
  // const renderContent = () => {
  //   switch (activeTab) {
  //     case 'dashboard':
  //       return <DashboardHome />;
  //     case 'profile':
  //       return <Profile />;
  //     case 'classes':
  //       return <Classes />;
  //     case 'assignments':
  //       return <Assignments />;
  //     case 'resources':
  //       return <Resources />;
  //     case 'students':
  //       return <Students />;
  //     case 'messages':
  //       return <Messages />;
  //     case 'analytics':
  //       return <Analytics />;
  //     default:
  //       return <DashboardHome />;
  //   }
  // };

  return (
   <div className='d-flex'>
     <div className="d-flex min-vh-100 bg-light  col-lg-3">
      {/* Sidebar */}
      <nav className={`sidebar bg-primary text-white p-3 ${sidebarOpen ? 'open' : ''}`} style={{
        minWidth: sidebarOpen ? 220 : 60,
        transition: 'min-width 0.3s',
        zIndex: 2
      }}>
        <button
          className="btn btn-outline-light mb-4 w-100"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '☰ Close' : '☰'}
        </button>
        <ul className="nav flex-column w-100">
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Dashboard</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Resources </a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Students</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Messages</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Assignments</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Profiles</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Class</a></li>
          <b></b>
          <br />
          <br />
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Logout</a></li>

         
        </ul>
      </nav>
      
      
    </div>
    <div className='col-lg-9  bg-light w-100 '  style={{background:'red'}}>
       <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Dashboard</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >import </a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Students</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Messages</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Assignments</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Profiles</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#" >Class</a></li>

    </div>
   </div>
  );
}



export default TeacherDashboard;




// Key Features for an International Teacher Dashboard
// 1. Profile Management
// View and edit personal and professional info
// Upload profile photo and documents
// 2. Class Management
// Create, edit, and view classes/courses
// See enrolled students
// Schedule class times (calendar integration)
// 3. Lesson/Content Management
// Upload and organize video lessons, documents, and resources
// Attach files or links for students
// 4. Live Class Sessions
// Schedule and launch live video sessions (Zoom, Jitsi, etc.)
// Share meeting links with students
// 5. Assignments & Assessments
// Create, assign, and grade assignments/quizzes
// View student submissions and give feedback
// 6. Student Progress & Analytics
// Track student attendance, grades, and engagement
// View analytics dashboards
// 7. Communication
// Send announcements/messages to students
// Real-time chat/Q&A during live sessions
// 8. Notifications
// Receive alerts for upcoming classes, submissions, messages, etc