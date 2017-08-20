import React from 'react';
import {expect} from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import Graph from '../src/components/graph/graph';
import data from './response';

describe('----------- Graph ----------------', () => {

  it('should render forecast data on the graph', () => {
    const props = {forecast: { data }};
    
    const wrapper = shallow(<Graph {...props} />);
    expect(wrapper).to.exist;

    const component = wrapper.getNode();
    expect(component.props.children[0].props.children).to.equal('How is our week looking?');

    const graphComponent = component.props.children[1];
    expect(graphComponent).to.exist;

    const graphData = graphComponent.props.children.props.data;
    expect(graphData).to.have.length(8);

  });
});
