import React, { Component } from 'react';

const Banner = React.createClass({
  render() {
    const bannerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100vw',
      height: '80vh',
      backgroundColor: this.props.bgColor
    };

    return (
      <div style={bannerStyle}>
        {this.props.children}
      </div>
    )
  }
});


export default Banner;
