import React from 'react';

const Banner = (props) => {

    const bannerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100vw',
      height: '80vh',
      backgroundColor: props.bgColor
    };

    return (
      <div style={bannerStyle}>
        {props.children}
      </div>
    )
};

export default Banner;
