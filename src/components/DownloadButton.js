import React from 'react';

const DownloadButton = (props) => {
  const downloadButtonStyle = {
    height: '10vw',
    width: '10vw',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Hind Vadodara',
    fontSize: '1.5vw',
    textAlign: 'center',
    marginBottom: '5vw'
  }

  return(
    <a style={downloadButtonStyle}
       href={props.file}
       download={props.name}
       className="hvr-shutter-in-horizontal">
      {props.label}
    </a>
  )
};

export default DownloadButton;
