
import Topbar from './header/topbar/topbar';
import Header from './header/header';
import Footer from './footer/footer';
import ScrollToTop from "react-scroll-to-top";
import JobSeekers from './header/navbar/job-seekers/jobSeekers';
import About from './header/navbar/about/about';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Services from './header/navbar/services/services';
import Product from './header/navbar/product/product';
import Home from './header/navbar/home/home';







function App() {
  return (
    <div>
      <div className="App">
      <Topbar/>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/jobSeekers' element={<JobSeekers/>}></Route>
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
