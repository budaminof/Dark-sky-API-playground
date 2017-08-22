import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import Weather from '../src/components/weather/weather';
import data from './response';

describe('----------- Weather ----------------', () => {
  const props = {forecast: { data }};
  const wrapper = shallow(<Weather {...props} />);
  const component = wrapper.getNode();

  it('should render forecast data', () => {
    expect(wrapper).to.exist;

    const summary = wrapper.find('h2').getNode().props.children;
    expect(summary[1]).to.equal(data.currently.temperature.toFixed(0));
    expect(summary[4]).to.equal(data.currently.summary);

    const description = wrapper.find('h3').getNode().props.children;
    expect(description[1]).to.equal(data.hourly.summary);

    const icon = wrapper.find('img').getNode();
    const iconName = data.daily.icon;
    expect(icon.props.src).to.equal(`/../assets/${iconName}.png`);
  });

});
