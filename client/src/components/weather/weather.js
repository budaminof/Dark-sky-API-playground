import React, { Component } from 'react';

export default class Weather extends Component {

  render() {

    let numOfClouds = this.props.forecast.data.currently.cloudCover * 10;
    let cloudCoverage = [];
    for (var i = 0; i < numOfClouds; i++) {
      let name = `cloud${i+1} cloud`
      cloudCoverage.push(<div className={name} key={i}></div>);
    }

    return (
      <div className='weather'>
        <div className="clouds">
        { cloudCoverage }
        </div>

        <div className="forecast col-md-12 col-xs-12">
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
