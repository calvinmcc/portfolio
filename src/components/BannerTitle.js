import React, { Component } from 'react';

const BannerTitle = (props) => {

  const bannerTitleStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'space-around',
    paddingLeft: '2vw',
    width: '5vw',
    height: 'auto',
    backgroundColor: "white"
  };

  function renderTitle() {
    var letters = props.title.split('')
    return letters.map(letter =>
      <div>{letter}</div>
    );
  }

  return(
    <div style={bannerTitleStyle}>{renderTitle()}</div>
  )
};

export default BannerTitle;
