import React from 'react'
import '../header/header.css'

import { Link } from 'react-router-dom'
function Header() {
  return (
   <div className='headers'>

     <div className='headerrwaper'>
      <div className="logo">Tutorial</div>
     <div className="headerlistcontainer">
  <ul className="row list-unstyled m-0 p-0 justify-content-end">
    <li className="col-auto"><Link to={'/'}>Home</Link></li>
    <li className="col-auto"><a href="">Class</a></li>
    <li className="col-auto"><Link to={'/Teachears'}>Teachers</Link></li>
    <li className="col-auto"><Link to={'/Teache'}>Contact</Link></li>
    <li className="col-auto"><a href="">About</a></li>
    <li className="col-auto"><a href="">Services</a></li>
    <li className="col-auto"><Link to={'/signup'}>Signup</Link></li>
  </ul>
</div>
      
    </div>

    <div className="headerniche">
      {/* <p>Learning  for all  by all !!!!!!!!!!!</p> */}
    </div>
   </div>
  )
}

export default Header
