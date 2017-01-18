import React from 'react';
import FontAwesome from 'react-fontawesome';

const Contact = (props) => {
  const contactStyle = {
    color: 'white',
    width: '7vw',
    height: '7vw',
    display: 'flex',
    position: 'auto'
  }
  return(
    <FontAwesome style={contactStyle} name={props.contactName} size='2x' />
  )
}

export default Contact
