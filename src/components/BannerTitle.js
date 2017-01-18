import React, { Component } from 'react';

const BannerTitle = (props) => {

  const bannerTitleStyle = {
    display: 'flex',
    flex: .6,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: props.bgColor,
    color: props.fontColor,
    fontFamily: 'Russo One'
  };

  function renderTitle() {
    var letters = props.title.split('')
    return letters.map((letter, index) =>
      <div key={index}>{letter}</div>
    );
  }

  return(
    <div style={bannerTitleStyle}>{renderTitle()}</div>
  )
};

export default BannerTitle;
