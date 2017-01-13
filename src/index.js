import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
        <Banner />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
