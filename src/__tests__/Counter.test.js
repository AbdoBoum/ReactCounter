import Counter from '../components/Counter';
import React from 'react';
import {mount} from 'enzyme';
import 'jest-styled-components'

describe('Counter component', () => {
    it('should have blue color', () => {
        const wrapper = mount(<Counter seconds={40}/>);
        expect(wrapper.find('.rec')).toHaveStyleRule('background-color', 'blue');
    });
});


