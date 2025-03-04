import React from 'react';
import Navigation from './Navigation.jsx';

const headerStyle = {
  backgroundColor: 'green',
  color: 'white',
}
const h1Style = {
  fontSize: '3rem',
}

function Header() {
  return (
    <header style={headerStyle}>
        <h1 style={h1Style}>Bret's Portfolio Page</h1>
        <Navigation />
    </header>
);
}


export default Header;
