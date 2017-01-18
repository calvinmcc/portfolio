import React from 'react';

const Skill = (props) => {

  const picStyle = {
    width: '7vw',
    height: '7vw',
    padding: '1vw',
    backgroundImage: `url(${props.background}.png)`,
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: 'none',
    margin: '.6vw'
    }

  return(
    <div style={picStyle} />
  )
};


export default Skill;
