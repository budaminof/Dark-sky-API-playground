import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import { App } from '../src/components/app/App';
import response from './response';

describe('----------- App ----------------', () => {
  const props = {
    search: {
      forecast: { }
    }
  };
  const state = {
    showForecast: false,
    tempColor: 'hsl(312, 66%, 24%)'
  }

  const nextState = {
    weather: {
      data: response
    }
  }
  const wrapper = shallow(<App { ...props } />);
  const component = wrapper.instance();

  it('should mount with default state values', () => {

    expect(component.state).to.deep.equal(state);
    // App should render only one child, div - which search component in it.
    expect(wrapper.children().length).to.be.equal(1);

  });

  it('should set state when recieving props', () => {
    sinon.stub(component, 'createColors');

    component.componentWillReceiveProps(nextState);
    expect(component.state.showForecast).to.be.true;
    // app component should render 2 div, one with search and one div with Weather and Graph
    expect(wrapper.children().length).to.be.equal(2);

    component.createColors.restore();
  })

});
