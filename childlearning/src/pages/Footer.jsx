import React from 'react'
import  '../pages/home.css'

function Footer() {
  return (
    <div>
          <footer >
    <div className="footer-col">
        <h4 className='footertitle'>products</h4>
        <ul>
            <li><a href="#">teams</a></li>
            <li><a href="#">advertising</a></li>
            <li><a href="#">talent</a></li>
        </ul>
    </div>
    <div className="footer-col">
        <h4 className='footertitle'>Resources</h4>
        <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">HelpCenter</a></li>
            <li><a href="#">API</a></li>
        </ul>
    </div>
    <div className="footer-col">
        <h4 className='footertitle'>company</h4>
        <ul>
            <li><a href="#">about</a></li>
            <li><a href="#">legal</a></li>
            <li><a href="#">contact us</a></li>
        </ul>
    </div>
    <div className="footer-col">
        <h4 className='footertitle'>follow us</h4>
        <div className="links">
            {/* <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a> */}
        </div>
    </div>
</footer>
      
    </div>
  )
}

export default Footer
