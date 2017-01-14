import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import MainPicture from './components/MainPicture';
import Bio from './components/Bio';
import Skill from './components/Skill';

class App extends Component {
  render() {
    return (
      <div>
        <Banner bgColor="rgb(0, 0, 0)" spacing="space-around">

        </Banner>
        <Banner bgColor="rgb(173, 75, 75)" spacing="space-around">
          <MainPicture />
          <Bio />
        </Banner>
        <Banner bgColor="rgb(94, 194, 182)" spacing="space-between">
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
        </Banner>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
