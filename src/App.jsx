import React from 'react'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'
import "remixicon/fonts/remixicon.css";
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  return (
    
      
        <Router>
        <Navbar className="w"/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={ <Blog/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/signup" element={ <Signup/>} />
          </Routes>
        </Router>
   
  )
}

export default App