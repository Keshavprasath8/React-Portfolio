// import './App.css'




import NavBar from "./pages/Navbar1";
import Home1 from './pages/Home1';
import About from './pages/About1';
import Project from './pages/Project1'
import Contact from './pages/ContactMe'
import Footer from './pages/Footer';
export default function App() {
  return (
  <div>
    <NavBar />
    <Home1 />
    <About />
    <Project />
    <Contact />
    <Footer/>
    {/* <Outlet/> */}
  </div>  
  )
}
