
import Topbar from './header/topbar/topbar';
import Header from './header/header';
// import About from './header/navbar/about/about';
// import Services from './header/navbar/services/services';
import Footer from './footer/footer';
import ScrollToTop from "react-scroll-to-top";
import JobSeekers from './header/navbar/job-seekers/jobSeekers';







function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      {/* <About/> */}
      {/* <Services/> */}
      <JobSeekers/>
      <Footer/>
      <ScrollToTop smooth back/>
    </div>
  );
}

export default App;
