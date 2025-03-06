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
import Footer from './components/Footer'
// import CreatePost from './components/CreatePost'
// import EditPost from './components/EditPost'


const App = () => {
  return (
    
      
        <Router>
        <Navbar className=""/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={ <Blog/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/login" element={ <Login/>} />
            <Route path="/signup" element={ <Signup/>} />
            {/* <Route path="/create" element={<CreatePost/>}/>
            <Route path="/edit" element={<EditPost/>}/> */}
          </Routes>
          <Footer/>
        </Router>
   
  )
}

export default App