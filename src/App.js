
import Topbar from './header/topbar/topbar';
import Header from './header/header';
// import About from './header/navbar/about/about';
import Footer from './footer/footer';
import ScrollToTop from "react-scroll-to-top";
import Services from './header/navbar/services/services';





function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      {/* <About/> */}
      <Services/>
      <Footer/>
      <ScrollToTop smooth back/>
    </div>
  );
}

export default App;
