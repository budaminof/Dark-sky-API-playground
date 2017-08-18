import React, { Component } from 'react';
import Search from '../search/search';
import Weather from '../weather/weather';

export default class App extends Component {
  render() {
    return (
      <div className='logo'>
        <Search />
        <h4><img src="../darksky.png"></img> Powered by Dark Sky</h4>
        <Weather />
      </div>
    );
  }
}
