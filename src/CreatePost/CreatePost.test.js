import React from 'react';
import { shallow } from 'enzyme';

import CreatePost from './CreatePost'

describe('Create Post Component', () => {
    it('renders without crashing', () => {
        shallow(<CreatePost />)
    }) 
})