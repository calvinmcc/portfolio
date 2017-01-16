import React, { Component } from 'react';

const BannerTitle = () => {

  const bannerTitleStyle = {
    display: 'flex',
    flex: 1,
    alignContent: 'space-around',
    paddingLeft: '1em',
    width: '5vw',
    height: 100,
    backgroundColor: "white"
  }

  return(
    <div>
      <div style={bannerTitleStyle}>d</div>
      <div style={bannerTitleStyle}>d</div>
      <div style={bannerTitleStyle}>d</div>
      <div style={bannerTitleStyle}>d</div>
      <div style={bannerTitleStyle}>d</div>
      <div style={bannerTitleStyle}>d</div>
    </div>
  )
};

export default BannerTitle;
