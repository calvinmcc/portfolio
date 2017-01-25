import React from 'react';
import FontAwesome from 'react-fontawesome';

const Contact = (props) => {
  const contactStyle = {
    color: 'rgba(47, 126, 126, 0.86)',
    width: '7vw',
    height: '7vw',
    display: 'flex',
    position: 'auto',
    flexWrap: 'wrap',
    marginLeft: '5vw',
    marginTop: '8vw'
  }
  return(
    <FontAwesome style={contactStyle} name={props.contactName}
      size='3x'/>
  )
}

export default Contact
