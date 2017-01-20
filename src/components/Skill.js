import React from 'react';
import ReactTooltip from 'react-tooltip';

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
    <a data-tip={props.info}>
      <div style={picStyle}>
        <ReactTooltip class='tooltipStyle'/>
      </div>
    </a>
  )
};


export default Skill;
