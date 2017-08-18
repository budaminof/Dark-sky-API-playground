import React, { Component } from 'react';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class';

let WeatherIcon = createReactClass({
  render: function() {
    return <img className="test" src={'/../assets/' + this.props.src + '.png'} ></img>
  }
});

export default class Weather extends Component {
  // contructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='weather'>
        <WeatherIcon src={ "clear-day" } />
      </div>
    );
  }
}

// mapStateToProps() {
//
// }
//
// mapStateToProps() {
//
// }
//
//
// export default connect(mapStateToProps, mapStateToProps)(Weather);
