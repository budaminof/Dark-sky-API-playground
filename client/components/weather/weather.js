import React, { Component } from 'react';

export default class Weather extends Component {

  render() {
    let clouds = `linear-gradient( grey, white ${this.props.forecast.data.currently.cloudCover * 100}%)`;

    return (
      <div className='weather'>
        <div className="forecast container col-md-12"
          style= {{ backgroundImage: clouds }} >
           <h3> { this.props.forecast.data.currently.temperature.toFixed(0) } <span> &deg; </span>
                { this.props.forecast.data.currently.summary }
           </h3>
           <h4> { this.props.forecast.data.daily.summary } </h4>
           <img className="test" src={'/../assets/' + this.props.forecast.data.daily.icon + '.png'} ></img>
        </div>
      </div>
    );
  }
}
