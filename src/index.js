import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import MainPicture from './components/MainPicture';
import Bio from './components/Bio';
import Skill from './components/Skill';
import BannerTitle from './components/BannerTitle';
import BannerContent from './components/BannerContent';

class App extends Component {
  render() {
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
          <BannerTitle title="SKILLS" />
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
        </Banner>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
