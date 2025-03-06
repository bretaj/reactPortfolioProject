import React from 'react';
import Navigation from './Navigation.jsx';

function Header() {
  return (
    <header>
        <h1>Bret Jensen</h1>
        <Navigation />
        {/* importing navigation component into header */}
    </header>
);
}


export default Header;
