import React, { Component } from 'react';

const Banner = React.createClass({
  render() {
    const { bgColor, spacing } = this.props
    const bannerStyle = {
      width: '100vw',
      height: '80vh',
      backgroundColor: bgColor,
      margin: 0,
      display: 'flex',
      justifyContent: spacing,
      alignItems: 'center',
      padding: 10,
      flexWrap: 'wrap'
    };

    return (
      <div style={bannerStyle}>{this.props.children}</div>
    )
  }
});


export default Banner;
