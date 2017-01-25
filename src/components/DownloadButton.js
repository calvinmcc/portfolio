import React from 'react';

const DownloadButton = (props) => {
  const downloadButtonStyle = {
    height: '20vh',
    width: '20vh',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Hind Vadodara',
    fontSize: '3vh',
    textAlign: 'center',
    marginBottom: '5vw',
    border: '1px solid rgba(47, 126, 126, 0.86)',
    color: 'rgba(47, 126, 126, 0.86)'
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
