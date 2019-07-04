import React from 'react';
import { shallow } from 'enzyme';

import ShoeList from './ShoeList'

describe('Shoe List Component', () => {
    it('renders without crashing', () => {
        shallow(<ShoeList />)
    }) 
})