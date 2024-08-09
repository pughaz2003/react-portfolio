import React from 'react' 
import ReactDOM from 'react-dom/client'
 import './index.css'
 import Home from './pages/Home.jsx'
 import Header from './pages/Header.jsx'
 import About from './pages/About.jsx'
 import Projects from './pages/Projects.jsx'
 import Contact from './pages/Contact.jsx'
 import Footer from './pages/Footer.jsx'






 ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
  <Header/>
  <Home/>
  <About/>
  <Projects/>
  <Contact/> 
  <Footer/>
   </React.StrictMode>
 )
