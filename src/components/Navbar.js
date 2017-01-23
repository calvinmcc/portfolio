import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const Navbar = () => {
  const navStyle = {
    zIndex: '4',
    height: '15vh',
    fontFamily: 'Amatica SC',
    color: 'white',
    fontSize: '120%',
    position: 'absolute',
    width: '100vw',
    marginTop: '-15vh'
  }

  const stickyStyle = {
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    boxShadow: '0px 2px rgba(47, 126, 126, 0.86)',
    alignItems: 'center',
    height: '15vh',
    marginTop: '0',
    display: 'flex',
    justifyContent: 'space-around'
  }

  return(
    <div style={navStyle}>
      <Sticky style={stickyStyle}>
        <a href="#bio">BIO</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </Sticky>
    </div>
  )
}

export default Navbar;
