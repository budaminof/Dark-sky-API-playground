import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import { SearchLocation } from '../src/components/search/search';

import { newSearch, handleError } from '../src/actions/index';

describe('----------- Search ----------------', () => {
  const props = {
    search: {
      error: false,
      newSearch,
      handleError,
    }
  };
  let wrapper;
  let component;

  beforeEach(() => {
    wrapper = shallow(<SearchLocation { ...props } />);
    component = wrapper.instance();
    sinon.stub(component, 'handleFormSubmit').returns(true);

  })
  afterEach(() => {
    component.handleFormSubmit.restore();
  })

  it('should call handleFormSubmit on componentDidMount without arguments', () => {
    component.componentDidMount();

    expect(component.handleFormSubmit.calledOnce).to.be.true;
    expect(component.handleFormSubmit.firstCall.args).to.deep.equal([]);

  });

  it('should call handleFormSubmit with arguments from state',function() {
    const state = {address: 'Boulder, CO'};
    const form = wrapper.find('form').first();

    // simulate will trigger the google call. and we dont have google require
    // need to figure out how to require google api script, that is now in index.html
    // form.simulate('submit');
    component.handleFormSubmit(state.address);
    expect(component.handleFormSubmit.calledOnce).to.be.true;
    expect(component.handleFormSubmit.firstCall.args).to.deep.equal([state.address]);

  })
});
