import React from 'react';
import FontAwesome from 'react-fontawesome';

const Project = (props) => {
  const projectStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: '80vw',
    height: '20vw',
    overflow: 'scroll',
    fontSize: '1.2vw',
    borderRadius: '2%',
    fontFamily: 'Hind Vadodara',
    textAlign: 'justify',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  }

  const imageStyle ={
    width: '28vw',
    height: '15vw',
    borderRadius: '2%',
    marginRight: '2vw'
  }

  const linkStyle = {
    fontFamily: 'Hind Vadodara',
    fontSize: '2vw',
    textDecoration: 'none',
    fontColor: 'black'
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0px',
    margin: '1'
  }

  const { title, description, source, link, image } = props.projectContent

  return(
    <div style={projectStyle}>
      <div style={containerStyle}>
        <a href={link}>
          <img style={imageStyle} src={image} />
        </a>
      </div>
      <div style={containerStyle}>
          <p>
          <h3>
            <a href={link} style={linkStyle}>
              {title}
              &nbsp; &nbsp;
              <FontAwesome name="arrow-circle-right" size="lg"  />
            </a>
          </h3>
          {description}
          <h5>
            <a href={source}>
              Source Code
              &nbsp; &nbsp;
              <FontAwesome name="arrow-circle-right" size="lg"  />
            </a>
          </h5>
        </p>
      </div>
    </div>
  );
}

export default Project;
