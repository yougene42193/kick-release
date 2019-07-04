import React from 'react';
import { shallow } from 'enzyme';

import ShoeListItem from './ShoeListItem'

describe('Shoe List Item Component', () => {
    it('renders without crashing', () => {
        shallow(<ShoeListItem />)
    }) 
})