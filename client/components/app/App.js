import React, { Component } from 'react';
import Search from '../search/search';
import Weather from '../weather/weather';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h5 className="logo"><img src="../darksky.png"></img>Powered by Dark Sky</h5>
        <Search />
        <Weather />
      </div>
    );
  }
}
