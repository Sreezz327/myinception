import React from 'react'
import './midFoot.css'
// import Navbar from '../../header/navbar/nav'
import About from '../../header/navbar/about/about'

export default function MidFoot() {
  return (
    
    <div className='midfoot'>
        <h4 className='head'>Quick Links</h4>
        {/* <div className='list-unstyled'>
        <Navbar/>
        </div> */}
       
        <nav class="quick-links">
            <ul className='list-unstyled'>
               <li><a href="http://www.myinceptiontech.com">Home</a></li>
               <li><a href={<About/>}>About Us</a></li>
               <li><a href="http://www.myinceptiontech.com/services">Services</a></li>
               <li><a href="http://www.myinceptiontech.com/products">Products</a></li>
               <li><a href="http://www.myinceptiontech.com/job_seeker">Job Seekers</a></li>
               <li><a href="http://www.myinceptiontech.com/contact">Contact</a></li>
            </ul>
          </nav>
    </div>
  )
}
