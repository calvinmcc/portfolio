import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import MainPicture from './components/MainPicture';
import Bio from './components/Bio';
import Skill from './components/Skill';
import BannerTitle from './components/BannerTitle';
import BannerContent from './components/BannerContent';
import Project from './components/Project';

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

    return (
      <div>
        <Banner bgColor="rgb(0, 0, 0)">
          <BannerContent spacing="space-around"></BannerContent>
        </Banner>
        <Banner bgColor="rgb(173, 75, 75)">
          <BannerTitle title="BIO" />
          <BannerContent spacing="space-around">
            <MainPicture />
            <Bio />
          </BannerContent>
        </Banner>
        <Banner bgColor="rgb(94, 194, 182)">
          <BannerContent spacing="space-between">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
          </BannerContent>
          <BannerTitle title="SKILLS" />
        </Banner>
        <Banner bgColor="rgb(184, 148, 96)">
          <BannerTitle title="PROJECTS" />
          <BannerContent spacing="space-around">
            <Project projectContent={projects[0]}/>
            <Project projectContent={projects[1]}/>
          </BannerContent>
        </Banner>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
