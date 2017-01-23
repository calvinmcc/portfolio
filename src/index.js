import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from './components/Banner';
import MainPicture from './components/MainPicture';
import Bio from './components/Bio';
import Skill from './components/Skill';
import BannerTitle from './components/BannerTitle';
import BannerContent from './components/BannerContent';
import Project from './components/Project';
import MainTitle from './components/MainTitle';
import Contact from './components/Contact';
import DownloadButton from './components/DownloadButton';
import Navbar from './components/Navbar';

class App extends Component {
  render() {

    const projects = [
      {
        title:       "Tripcast",
        description:  `Built as my final project for CodeCore's development
                      bootcamp, Tripcast is a mapping program that forecasts the
                      weather, gas prices, and hotel prices along a given route.
                      Tripcast uses a simple Rails back-end with JavaScript and
                      jQuery on the front-end. Tripcast uses the Google Maps,
                      Amadeus Hotel, myGasFeed, and DarkSky APIs for the data.`,
        source:       "https://github.com/calvinmcc/tripcast",
        link:         "https://tripcast.herokuapp.com/",
        image:        "tripcast.png"
      },
      {
        title:       "Find-My-Pet",
        description: `A web application that was created in a weekend in
                      collaboration with Envisioning Lab's Test Tube program.
                      The application was created in order to help owners find
                      lost pets based on sightings reported to the website.
                      Along with two other team members, I was responsible for
                      creating and integrating the map components. Ruby on
                      Rails, Javascript, JQuery, AJAX,  and Google Maps API were
                      the primary technologies used in creating the application,
                      which was compiled together on Github.`,
        source: "https://github.com/Find-My-Pet/Find_my_pet",
        link: "https://findmypetapp2.herokuapp.com/",
        image: "findmypet.png"
      }
    ];

    const skills = [
      ['ruby', 'Ruby'],
      ['rails', 'Ruby on Rails'],
      ['react', 'React.js'],
      ['html', 'HTML'],
      ['css', 'CSS'],
      ['js', 'JavaScript'],
      ['rwd', 'Responsive Web Design'],
      ['sass', 'Sass'],
      ['express', 'Express.js'],
      ['rn', 'React Native'],
      ['bootstrap', 'Bootstrap'],
      ['git', 'Git'],
      ['github', 'Github'],
      ['google', 'Google Maps API'],
      ['HerokuLogo', 'Heroku'],
      ['coffee', 'CoffeeScript'],
      ['jquery', 'jQuery'],
      ['json', 'JSON'],
      ['mongo', 'MongoDB'],
      ['node', 'Node.js'],
      ['postgresql', 'PostgreSQL'],
      ['ajax', 'AJAX'],
      ['rspec', 'RSpec']
    ]

    const contacts = [
      ['facebook-official', 'https://www.facebook.com/calvin.mcconnell'],
      ['github-alt', 'https://github.com/calvinmcc'],
      ['envelope', 'mailto:calvin.mcconnell20@gmail.com'],
      ['instagram', 'https://www.instagram.com/calvin.mcconnell'],
      ['linkedin-square', 'https://ca.linkedin.com/in/calvin-mcconnell'],
      ['twitter', 'https://twitter.com/CalvinMcConne12'],
      ['angellist', 'https://angel.co/calvin-mcconnell']
    ]

    function renderImage() {
      var images = skills
      return images.map((image, index) =>
        <Skill key={index} background={image[0]} info={image[1]}/>
      );
    }

    function renderContact() {
      var contactIcons = contacts
      return contactIcons.map((contact, index) =>
        <a key={index} href={contact[1]}>
          <Contact key={index} contactName={contact[0]}/>
        </a>
      );
    }

    return (
      <StickyContainer>
        <Banner bgColor="rgba(255, 255, 255, 0)"
                bgImage="background.JPG"
                height="100vh"
                >
          <BannerContent spacing="space-around" width="95vw">
            <MainTitle title="Calvin Everett McConnell"
                       subheading1="Web Developer"
                       subheading2="Vancouver, BC"
                     />
          </BannerContent>
        </Banner>

        <Navbar />

        <Banner bgColor="rgb(47, 40, 43)" height="85vh" id="bio">
          <BannerTitle title="BIO" bgColor="black" fontColor="white" />
          <BannerContent spacing="space-around" width="90vw">
            <MainPicture />
            <Bio />
          </BannerContent>
        </Banner>

        <Banner bgColor="white" height="85vh" id="skills">
          <BannerContent spacing="space-between" width="90vw">
            {renderImage()}
          </BannerContent>
          <BannerTitle title="SKILLS"
                       bgColor="rgb(47, 40, 43)"
                       fontColor="white"/>
        </Banner>

        <Banner bgColor="rgb(31, 33, 75)" height="85vh" id="projects">
          <BannerTitle title="PROJECTS" bgColor="white" fontColor="black" />
          <BannerContent spacing="space-between" width="90vw">
            <Project projectContent={projects[0]}/>
            <Project projectContent={projects[1]}/>
          </BannerContent>
        </Banner>

        <Banner bgColor="rgb(71, 121, 173)" height="85vh" id="contact">
          <BannerContent spacing="space-around" width="90vw">
            {renderContact()}
            <DownloadButton file='resume.pdf'
                            name='CalvinMcConnellResume'
                            label='Download Resume'
                          />
          </BannerContent>
          <BannerTitle title="CONTACT"
                       bgColor="rgb(31, 33, 75)"
                       fontColor="white" />
        </Banner>

      </StickyContainer>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
