import React from 'react'
import './nav.css'
import About from './about/about'
import Services from './services/services'



export default function Navbar() {
  return (
    <div>
          <nav class="nav-menu">
            <ul>
               <li class="active"><a href=' '>Home</a></li>
               <li><a href={<About/>}>About Us</a></li>
               <li><a href={<Services/>}>Services</a></li>
               <li><a href=" ">Products</a></li>
               <li><a href=" ">Job Seekers</a></li>
               <li><a href=" ">Contact Us</a></li>
            </ul>
          </nav>
    </div>
  )
}