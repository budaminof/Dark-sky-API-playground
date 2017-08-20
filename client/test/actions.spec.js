import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';

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
    sinon.stub(axios,'get');
    const boulderLatLng = {lat: 40.0149856, lng: -105.27054559999999};

    // return actions.newSearch(boulderLatLng).then(() => {
    //   expect(axios.get.calledOnce).to.be.true;
    //   expect(axios.get.firstCall.args).to.deep.equal(boulderLatLng);
    // })

    axios.get.restore();
  });

});
