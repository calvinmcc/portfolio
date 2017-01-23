import React from 'react';
import FontAwesome from 'react-fontawesome';

const Contact = (props) => {
  const contactStyle = {
    color: 'white',
    width: '7vw',
    height: '7vw',
    display: 'flex',
    position: 'auto',
    marginLeft: '5vw',
    marginTop: '8vw'
  }
  return(
    <FontAwesome style={contactStyle} name={props.contactName} size='3x' />
  )
}

export default Contact
