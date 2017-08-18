import React, { Component } from 'react';
import createReactClass from 'create-react-class';


export default class Weather extends Component {


  render() {

    let WeatherIcon = createReactClass({
      render: function() {
        return <img className="test" src={'/../assets/' + this.props.src + '.png'} ></img>
      }
    });

    return (
      <div className='weather'>
        <WeatherIcon src={"wind"} />
      </div>
    );
  }
}
