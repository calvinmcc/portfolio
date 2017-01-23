import React from 'react';
import { Parallax } from 'react-parallax';

const Banner = (props) => {

    const bannerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100vw',
      height: props.height,
      backgroundColor: props.bgColor,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

    return (
      <Parallax bgImage={props.bgImage} strength={200}>
        <div style={bannerStyle} id={props.id}>
          {props.children}
        </div>
      </Parallax>
    )
};

export default Banner;
