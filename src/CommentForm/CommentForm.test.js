import React from 'react';
import { shallow } from 'enzyme';

import CommentForm from './CommentForm'

describe('CommentForm Component', () => {
    it('renders without crashing', () => {
        shallow(<CommentForm />)
    }) 
})