import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'; 
import AboutMe from './pages/AboutMe.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

