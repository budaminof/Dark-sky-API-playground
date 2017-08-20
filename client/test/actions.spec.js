import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import promise from 'redux-promise';
import configureStore from 'redux-mock-store';

const middlewares = [ promise ];
const mockStore = configureStore(middlewares);

import * as actions from '../src/actions/index';
import * as types from '../src/actions/types';

describe('----------- Actions ----------------', () => {

  it('should create an action to handle an error', () => {
    const payload = true;
    const expectedAction = {
      type: types.ERROR,
      payload
    }
    expect(actions.handleError(payload)).to.deep.equal(expectedAction);
  });

  it('should create an action for a new search', () => {
    const boulderLatLng = {lat: 40.0149856, lng: -105.27054559999999};

    sinon.stub(axios,'get');
    // cant call .then on undefined.
    // why is it undefined? and not even a Promise?
    return actions.newSearch(boulderLatLng).then(() => {
      expect(axios.get.calledOnce).to.be.true;
      expect(axios.get.firstCall.args).to.deep.equal(boulderLatLng);
    })


    return store.dispatch(actions.newSearch(boulderLatLng)).then((data) => {
      console.log(data);
      // expect(store.getActions()).toEqual(expectedActions)
    })

    axios.get.restore();
  });

});
