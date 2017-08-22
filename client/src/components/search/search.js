import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { newSearch, handleError } from '../../actions';

export class SearchLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'Boulder, CO'
     }
    this.onChange = (address) => this.setState({ address })
  }

  componentDidMount() {
    this.handleFormSubmit();
  }

  handleFormSubmit = (event) => {
    if (event) event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.newSearch(latLng))
      .catch(error => this.props.handleError(error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const cssClasses =  {
      root: 'form-group'
    }

    const styleContainer = {
      input: { zIndex: 300 },
      autocompleteContainer: { zIndex: 300 },
      googleLogoContainer: { display: 'none' }
    }

    return (
      <div className="row">
        <div className="container col-md-4 col-md-offset-4">
          <div className="form-location">
            <form onSubmit={ this.handleFormSubmit } >
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
                <h4 className="danger">We could not find this address, can you try again?</h4>
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


SearchLocation.propTypes = {
  handleSubmit: PropTypes.func
};

export default connect(mapStateToProps, { newSearch, handleError })(SearchLocation);
