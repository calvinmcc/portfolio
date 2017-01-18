import React from 'react';

const MainPicture = () => {

  const picStyle = {
    width: '30vw',
    height: '30vw',
    backgroundImage: `url(hi.jpg)`,
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  }

  return(
    <div style={picStyle} />
  )
};


export default MainPicture;
