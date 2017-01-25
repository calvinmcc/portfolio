import React from 'react';

const BannerContent = (props) => {

  const bannerContentStyle = {
    margin: 0,
    width: props.width,
    display: 'flex',
    justifyContent: props.spacing,
    alignItems: 'center',
    padding: 0,
    flexWrap: 'wrap'
  }

  return(
    <div style={bannerContentStyle} className={props.responsive}>
      {props.children}
    </div>
  )
}

export default BannerContent;
