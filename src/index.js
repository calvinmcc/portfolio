import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner'
import MainPicture from './components/MainPicture'
import Bio from './components/Bio'

class App extends Component {
  render() {
    return (
      <div>
        <Banner bgColor="rgb(0, 0, 0)">

        </Banner>
        <Banner bgColor="rgb(173, 75, 75)">
          <MainPicture />
          <Bio />
        </Banner>
        <Banner bgColor="rgb(94, 194, 182)">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          contentasdfasdfaf
        </Banner>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
