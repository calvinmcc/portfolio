import React, { Component } from 'react';

const BannerContent = (props) => {

  const bannerContentStyle = {
    margin: 0,
    width: "90vw",
    display: 'flex',
    justifyContent: props.spacing,
    alignItems: 'center',
    padding: 0,
    flexWrap: 'wrap'
  }

  return(
    <div style={bannerContentStyle}>{props.children}</div>
  )
}

export default BannerContent;
