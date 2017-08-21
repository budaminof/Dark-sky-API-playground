import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import reducer from '../src/reducers/search';
import * as types from '../src/actions/types';
import response from './response';

describe('----------- Search Reducer ----------------', () => {

  it('should return the initial state', () => {

    expect(reducer(undefined, {})).to.deep.equal(
      { error: false, forcast: {} })

  });

  it('should handle ERROR', () => {

    expect(reducer([], {
        type: types.ERROR,
        payload: true
      })).to.deep.equal({ error: true });

  });

  it('should handle NEW_DATA', () => {

    expect(reducer([], {
        type: types.NEW_DATA,
        payload: response
      })).to.deep.equal({ forcast: response, error: false });

  });

});
