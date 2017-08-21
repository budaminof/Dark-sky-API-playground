import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import { SearchLocation } from '../src/components/search/search';
import axios from 'axios'
// import PlacesAutocomplete from 'react-places-autocomplete';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


import { newSearch, handleError } from '../src/actions/index';
import * as types from '../src/actions/types';

const google =axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAiXlfqwH_Js3LIZAhBnT4OHYblZLiu378&&libraries=places")


describe('----------- Search ----------------', () => {
  const boulderCoords = {lat: 40.0149856, lng: -105.27054559999999};
  const geocodeByAddress = () => true
  const getLatLng = () => boulderCoords
  // const google = () => {geocodeByAddress,getLatLng}
  // const fakeFunctions = {geocodeByAddress, getLatLng}


  it('should render currectly', () => {
    const props = { search: {
      error: false,
      newSearch,
      handleError,
      google
      }
    };

    const wrapper = shallow(<SearchLocation { ...props } />);
    // console.log('****',wrapper.getNode().props);
    const component = wrapper.find(SearchLocation).root.nodes[0].props.children.props.children.props.children.props
    console.log(component);
    // sinon.stub(component,'handleFormSubmit').returns({success:true})
    // expect(component.handleFormSubmit.calledOnce).to.be.true
    // component.handleFormSubmit.restore()
    // wrapper.instance().componentDidMount()
    // const testProps = {handleFormSubmit:wrapper.instance().handleFormSubmit }
    // console.log(testProps, '***********************');
    // const component =
    // sinon.stub(wrapper.instance(), 'componentDidMount');

    // sinon.stub(testProps,'handleFormSubmit').returns({success:true})
    // expect(testProps.handleFormSubmit.calledOnce).to.be.true
    // testProps.handleFormSubmit.restore()

  });
});
