import React from 'react'
import './address.css'
import {SlLocationPin} from 'react-icons/sl';

export default function Address() {
  return (
    <div className='address'>
       <div class="info">
            <i class="bx-map"><SlLocationPin/></i>
            <h3>Our Address</h3>
            <p>No # 4/ 18 Shiny Tech park,</p>
            <p>Poonamallee Road, Ekkattuthangal,</p>
            <p>Chennai - 600032.</p>
        </div>
    </div>
  )
} 
