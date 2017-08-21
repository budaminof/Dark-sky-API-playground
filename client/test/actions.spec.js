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
  const boulderCoords = {lat: 40.0149856, lng: -105.27054559999999};
  beforeEach(() => {
    sinon.spy(axios,'get');
  })

  afterEach(() => {
    axios.get.restore();
  })

  it('should create an action to handle an error', () => {
    const payload = true;
    const expectedAction = {
      type: types.ERROR,
      payload
    }
    expect(actions.handleError(payload)).to.deep.equal(expectedAction);
  });

  it('should call axios.get with correct arguments', () => {
    actions.newSearch(boulderCoords);

    expect(axios.get.calledOnce).to.be.true;
    expect(axios.get.firstCall.args).to.deep.equal([`${process.env.ROOT_URL}/${boulderCoords.lat}/${boulderCoords.lng}`]);
  });

  it('should return an action object with a correct action and payload', () => {
    const result = actions.newSearch(boulderCoords);

    expect(result.type).to.equal(types.NEW_DATA);
    expect(result.payload.toString()).to.equal("[object Promise]");
  });

});
