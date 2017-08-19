import React from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { newSearch, handleError } from '../../actions';

const geocoder = new google.maps.Geocoder();

class SearchLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'Boulder, CO'
     }
    this.onChange = (address) => this.setState({ address })
  }
  // use componentDidMount and not componentWillMount
  // that way i know that the component is already mounted
  componentDidMount() {
    this.handleFormSubmit(event);
  }

  handleFormSubmit = (event) => {
    if (event) event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.newSearch(latLng))
      .catch(error => this.props.handleError(error))
  }

  render() {
    console.log(this.props);
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const cssClasses =  {
      root: 'form-group'
    }

    const styleContainer = {
      autocompleteContainer: { zIndex: 100 },
      googleLogoContainer: { display: 'none' }
    }

    return (
      <div className="row">
        <div className="container col-md-4 col-md-offset-4">
          <div className="form-location">
            <form onSubmit={this.handleFormSubmit}>
              <PlacesAutocomplete
                inputProps ={ inputProps }
                styles = { styleContainer }
                />
              <div className="btn-wrapper">
                <button type="submit">
                  search
                </button>
              </div>
              { this.props.search.error ?
                <h4 className="danger">Something went wrong, can you please try again?</h4>
                : <p></p>
              }
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { search: state.search }
}
export default connect(mapStateToProps, { newSearch, handleError })(SearchLocation);


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
