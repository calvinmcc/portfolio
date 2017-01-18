import React from 'react';

const MainTitle = (props) => {
  const mainTitleStyle = {
    fontFamily: 'Amatica SC',
    fontSize: '350%',
    color: 'white',
    textAlign: 'center'
  }

  const subheadingStyle = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Hind Vadodara'
  }

  return (
    <div style={{paddingBottom: '10%'}}>
      <div style={mainTitleStyle}>
        {props.title}
      </div>
      <div style={subheadingStyle}>{props.subheading1} | {props.subheading2}</div>
    </div>
  )
}

export default MainTitle;
