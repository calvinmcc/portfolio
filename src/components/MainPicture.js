import React from 'react';

const MainPicture = () => {

  const picStyle = {
    width: '50vh',
    height: '50vh',
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
