import React, { Component } from 'react';

const Banner = React.createClass({
  render() {

    const divStyle = {
      width: '100vw',
      height: '80vh',
      backgroundColor: this.props.bgColor,
      margin: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10
    };

    return (
      <div style={divStyle}>{this.props.children}</div>
    )
  }
});


export default Banner;
