// TODO: figure out if pathways are correct
// TODO: import React-router-DOM? ... npm install react-router-dom?
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Project from '../components/Portfolio.jsx'
import Contact from '../components/Contact.jsx'
import Resume from '../components/Resume.jsx'
// TODO: how to use Navigation function on this page? Do i need to even to import it here?
import Navigation from ;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';

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

export default App

