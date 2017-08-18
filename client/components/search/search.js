import React from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { newSearch } from '../../actions';

const geocoder = new google.maps.Geocoder();

class SearchLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Boulder, CO' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.newSearch(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={ inputProps } />
        <button type="submit">SEARCH</button>
      </form>
    )
  }
}

export default connect(null, { newSearch })(SearchLocation);


  // getCurrentLocation() {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     return position;
  //   }).then(() => {
  //     let coords = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }
  //     geocoder.geocode({'location': coords }, function(results, status) {
  //       if (status === 'OK') {
  //         if (results[0]) {
  //           return results[0].formatted_address;
  //         } else {
  //           return '';
  //         }
  //       }
  //     })
  //   })
  // }
