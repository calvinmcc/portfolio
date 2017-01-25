import React from 'react';

const MainPicture = () => {

  const picStyle = {
    height: '45vh',
    width: '45vh',
    backgroundImage: `url(hi.jpg)`,
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  }

  return(
    <div style={picStyle} className="imgResponsive">
      <div className="imgResponsive" />
    </div>
  )
};


export default MainPicture;
