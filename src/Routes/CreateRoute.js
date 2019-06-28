import React, { Component } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import { Section } from '../utils/utils';

export default class CreateRoutes extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    handleCreateSuccess = post => {
        const { history } = this.props
        history.push('/list')
    }

    render() {
        return (
            <Section className="CreatePostPage">
                <CreatePost 
                    onCreateSuccess={this.handleCreateSuccess}
                />
            </Section>
        )
    }
}