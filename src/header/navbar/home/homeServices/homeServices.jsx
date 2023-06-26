import React from 'react'
import './homeServices.css'
import First from './firstImg/firstImg'
import Second from './secondImg/secondImg'

export default function HomeServices() {
  return (
    <div>
        <div class="section-title">
            <h2>Welcome to My Inception</h2>
        </div>
        <div className='imgBlock'>
          <First/>
          <Second/>
        </div>
    </div>
  )
}