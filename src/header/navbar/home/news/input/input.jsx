import React from 'react'
import './input.css'

export default function Input() {
  return (
    <div className='in'>
        <input type="email" className="form-control" placeholder="Enter your email"/>
        <button className='btn' type="submit">Subscribe Now</button>
    </div>
  )
}
