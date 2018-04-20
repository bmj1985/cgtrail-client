import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../assets/DUShield.png';

const Header2 = () => (
  <AppBar
    title={<img src={logo} className="App-logo" alt="logo" />}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      backgroundColor: '#222122',
      display: 'flex',
      justifyContent: 'flex-start',
      height: '8vh',
      gridRowStart: 1,
      gridRowEnd: 1,
      boxShadow: '0 8px 140px 0px rgba(0,0,0,0.1)',
      gridArea: 'header',
    }}
  />
);

export default Header2;
