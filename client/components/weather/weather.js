import React, { Component } from 'react';

export default class Weather extends Component {

  render() {
    console.log("WEATHER",this.props);
    let clouds = `linear-gradient( grey, white ${this.props.forecast.data.currently.cloudCover * 100}%)`;

    return (
      <div className='weather'>
        <div className="forecast container col-md-12"
          style= {{ backgroundImage: clouds }}
           >
           <p> { this.props.forecast.data.daily.summary } </p>
           <img className="test" src={'/../assets/' + this.props.forecast.data.daily.icon + '.png'} ></img>
        </div>
      </div>
    );
  }
}
