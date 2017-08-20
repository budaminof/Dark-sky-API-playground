import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import Search from '../src/components/search/search';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('----------- Search ----------------', () => {

  const wrapper = shallow(<Search />);

  it('should render currectly', () => {


  });
});


// const geocoderSpy = sinon.stub(google.maps, 'Geocoder');
//
// beforeEach(function() {
//   sinon.stub(google.maps, 'Geocoder');
// })
//
// afterEach(function () {
//   google.maps.Geocoder.restore();
// })
