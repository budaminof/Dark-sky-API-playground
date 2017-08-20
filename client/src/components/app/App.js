import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../search/search';
import Weather from '../weather/weather';
import Graph from '../graph/graph';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForecast: false,
      tempColor: `hsl(312, 66%, 24%)`
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showForecast: true });
    let temp = nextProps.weather.data.currently.temperature;
    this.createColors(temp);
    return
  }

  createColors(temp) {
    // full range of hue colors that we will use
    let fullHue = 300;
    // number of F degrees we are mapping to colors -40f to 140f
    let degrees = 140;
    // ignore minus temp for easy calculation
    let ignoreMinusTemp = 40;
    // how many F degrees is one Hue Unite
    let fToUnitesOfHue = fullHue / degrees;
    let levelTemp = temp + ignoreMinusTemp;
    // add to the base of fullHue color - and amount of unites which our temp is equal.
    let hue = fullHue - (fToUnitesOfHue * levelTemp).toFixed(0);
    
    this.setState({ tempColor: `hsl(${hue}, 100%, 48%)`});
    // set root variables for css
    // h1 color
    document.documentElement.style.setProperty(`--temp-color`, `hsl(${ hue }, 100%, 48%)` );
    // button color
    document.documentElement.style.setProperty(`--temp-color-lighter`, `hsl(${ hue + 30 }, 100%, 48%)` );
    // border color
    document.documentElement.style.setProperty(`--temp-color-border`, `hsl(${ hue - 20 }, 100%, 20%)` );
    return
  }

  render() {
    return (
      <div className='app' >
        <h5 className="logo"><img src="../darksky.png"></img>Powered by Dark Sky</h5>
        <h1>
            Winter is coming
          </h1>
        <Search />

          {
            this.state.showForecast &&
            <div>
              <Weather forecast={ this.props.weather }/>
              <Graph forecast={ this.props.weather }/>
            </div>
          }
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