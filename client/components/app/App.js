import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../search/search';
import Weather from '../weather/weather';
import Graph from '../graph/graph';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='app'>
        <h5 className="logo"><img src="../darksky.png"></img>Powered by Dark Sky</h5>
        <Search />
        { !!this.props.weather && <Weather forecast={ this.props.weather }/> }
        { !!this.props.weather && <Graph forecast={ this.props.weather }/> }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    weather: state.search.forcast
  }
}
export default connect(mapStateToProps, null)(App);
