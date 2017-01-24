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

  const headerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return(
    <div style={navStyle}>
      <Sticky style={stickyStyle}>
        <a href="#bio" style={headerStyle} className="hvr-underline-from-center">
          <a>BIO</a>
        </a>
        <a href="#skills" style={headerStyle} className="hvr-underline-from-center">
          <a>SKILLS</a>
        </a>
        <a href="#projects" style={headerStyle} className="hvr-underline-from-center">
          <a>PROJECTS</a>
        </a>
        <a href="#contact" style={headerStyle} className="hvr-underline-from-center">
          <a>CONTACT</a>
        </a>
      </Sticky>
    </div>
  )
}

export default Navbar;
