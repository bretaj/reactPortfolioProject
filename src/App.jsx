import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'; 
import AboutMe from './pages/AboutMe.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

