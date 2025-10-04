import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from  '../../Dashboard/techearall/Resources'
// import Resources from  '../../Dashboard/techearall/Assignments'
// import Resources from  '../../Dashboard/techearall/Classs'
// import Resources from  '../../Dashboard/techearall/Messages'
// import Resources from  '../../Dashboard/techearall/Students'
// import Resources from  '../../Dashboard/techearall/Profile'
function TeacherSidebar() {
  return (
    <div>
        <Router>
            <Routes>
                <Route  path='/resourses' element={<Resources/>}/>
            </Routes>
        </Router>
      
    </div>
  )
}

export default TeacherSidebar
