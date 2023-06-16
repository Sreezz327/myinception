import React from 'react'
import './rightFoot.css'
import { CiFacebook} from 'react-icons/ci'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

export default function RightFoot() {
  return (
    <div className='rightfoot'>
        <h4 className='head'>Follow Us</h4>
        <ul className='list-unstyled'>
            <li>
                <a href='#' className='facebook' title='facebook'>
                    <i className='icon-facebook'><CiFacebook/></i>
                </a>
            </li>
            <li>
            <a href='#' className='linkedin' title='linkedin'>
                    <i className='icon-linkedin'><TiSocialLinkedinCircular/></i>
                </a>
            </li>
        </ul>
    </div>
  )
}
