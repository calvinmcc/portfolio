import React from 'react';

const Project = (props) => {
  const projectStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: '34vw',
    height: '34vw',
    margin: '1em',
    padding: '1em',
    overflow: 'scroll',
    fontSize: '1 rem',
    borderRadius: '2%',
    fontFamily: 'Hind Vadodara',
    textAlign: 'justify',
    textDecoration: 'none',
    color: 'white'
  }

  const imageStyle ={
    width: '34vw',
    height: '20vw',
    borderRadius: '2%'
  }

  const { title, description, source, link, image } = props.projectContent

  return(
    <div style={projectStyle}>
      <a href={link}><img style={imageStyle} src={image} /></a>
      <h3><a href={link} style={{fontFamily: 'Russo One',
                                 size: '2vw',
                                 textDecoration: 'none',
                                 fontColor: 'black'}}>{title}</a></h3>
      <p>{description}</p>
      <h5><a href={source}>Source Code</a></h5>
    </div>
  );
}

export default Project;
