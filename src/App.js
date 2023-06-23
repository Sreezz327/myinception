
import Topbar from './header/topbar/topbar';
import Header from './header/header';
import Footer from './footer/footer';
import ScrollToTop from "react-scroll-to-top";
import JobSeekers from './header/navbar/job-seekers/jobSeekers';
import About from './header/navbar/about/about';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Services from './header/navbar/services/services';







function App() {
  return (
    <div>
      <div className="App">
      <Topbar/>
      <Header/>
      <BrowserRouter>
    <Routes>
      {/* <Route path='home' element={<Home/>}></Route> */}
      <Route path='about' element={<About/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      {/* <Route path='products' element={<Products/>}></Route> */}
      <Route path='jobSeekers' element={<JobSeekers/>}></Route>
      {/* <Route path='contactUs' element={<ContactUs/>}></Route> */}
      </Routes> 
    </BrowserRouter>
      <Footer/>
      <ScrollToTop smooth back/>
     
   </div>
    </div>
   
  );
}

export default App;
