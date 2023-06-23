import React from 'react'
import './nav.css'




export default function Navbar() {
  return (
    <div>
          <nav class="nav-menu">
            <ul>
               <li class="active"><a href=' '>Home</a></li>
               <li><a href="http://localhost:3000/About">About Us</a></li>
               <li><a href="http://localhost:3000/Services">Services</a></li>
               <li><a href=" ">Products</a></li>
               <li><a href="http://localhost:3000/JobSeekers">Job Seekers</a></li>
               <li><a href=" ">Contact Us</a></li>
            </ul>
          </nav>
    </div>
  )
}
