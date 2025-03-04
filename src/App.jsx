import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'; 
import AboutMe from './pages/AboutMe.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import React from 'react';
// TODO: import a css file?
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        {/* routes or switch? */}
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

