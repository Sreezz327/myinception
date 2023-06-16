import React from 'react'
import LeftFoot from './leftFoot/leftFoot'
import MidFoot from './midFoot/midFoot'
import RightFoot from './rightFoot/rightFoot'
import Copyright from './copyright/copyright'
import './footer.css'

export default function Footer() {
  return (
    <div>
        <div className='footer'>
         <LeftFoot/>
         <MidFoot/>
         <RightFoot/>
        </div>
        <div>
         <Copyright/>
       </div>
    </div>
    
  )
}
