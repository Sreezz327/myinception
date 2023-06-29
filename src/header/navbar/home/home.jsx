import React from 'react'
import Hero from './hero/hero'
import HomeServices from './homeServices/homeServices'
import Aboutsec from './about-us-sec/about-us'
import Aboutlist from './about-list/about-list'
import Counts from './counts/counts'
import Aboutbtm from './about-btm/about-btm'
import Countsbtm from './countsbtm/countsbtm'
import News from './news/news'
import Contact from './contact/contact'


export default function Home() {
  return (
    <div>
        <Hero/>
        <HomeServices/>
        <Aboutsec/>
        <Aboutlist/>
        <Counts/>
        <Aboutbtm/>
        <Countsbtm/>
        <News/>
        <Contact/>
        
        
        
    </div>
  )
}
