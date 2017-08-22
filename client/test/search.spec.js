import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
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
    component = wrapper.instance()
    sinon.stub(component, 'handleFormSubmit').returns(true)
    sinon.spy(component, 'setState')
  })

  afterEach(() => {
    component.handleFormSubmit.restore()
    component.setState.restore()
  })

  it('should call handleFormSubmit on componentDidMount', () => {

    component.componentDidMount();
    expect(component.handleFormSubmit.calledOnce).to.be.true;
    expect(component.handleFormSubmit.firstCall.args).to.deep.equal([]);

  });

  it('should call handleFormSubmit when the form is submitted', function() {

    const form = wrapper.find('form');
    form.node.props.onSubmit();
    expect(component.handleFormSubmit.calledOnce).to.be.true;
    expect(component.handleFormSubmit.firstCall.args).to.deep.equal([]);

  });

  it('should call setState when input changes', function() {
    const input = wrapper.find('PlacesAutocomplete').node;
    input.props.inputProps.onChange("Tel Aviv, Israel");

    expect(component.setState.calledOnce).to.be.true;
    expect(component.setState.firstCall.args).to.deep.equal([{address: "Tel Aviv, Israel"}]);
    expect(component.state).to.deep.equal({address: "Tel Aviv, Israel"});
  });

});
