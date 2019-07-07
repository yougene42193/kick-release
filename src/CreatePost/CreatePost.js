import React from 'react';
import './CreatePost.css'
import ApiService from '../services/post-api-service';
import { Textarea } from '../utils/utils'

export default class CreatePost extends React.Component {
    static defaultProps = {
        onCreateSuccess: () => {}
    }

    state = { error: null, success: null }

    handleSubmit = e => {
        e.preventDefault()
        const { brand, title, release_date, content } = e.target

        this.setState({ error: null })
        ApiService.postPost({
            brand: brand.value,
            title: title.value,
            release_date: release_date.value,
            content: content.value,
        })
            .then(res => {
                brand.value = ''
                title.value = ''
                release_date.value = ''
                content.value = ''
                this.setState({ success: res.success })
                this.props.onCreateSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <section className="new-post">
                <h2>Post a new release</h2>
                <fieldset>
                    <form
                        className="new-post-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="brand-label">
                            <label>Brand: </label>
                            <br /><select name="brand" className="create-input" required>
                                <option value=''>-Select Brand-</option>
                                <option value='Adidas'>Adidas</option>
                                <option value='Jordan'>Jordan</option>
                                <option value='Nike'>Nike</option>
                                <option value='Yeezy'>Yeezy</option>
                            </select>
                        </div>
                        <div className="shoe-label">
                            <label>Shoe Name: </label>
                            <br /><input type="text" name="title" className="create-input" required></input>
                        </div>
                        <div className="release-label">
                            <label>Release Date: </label>
                            <br /><input type="date" name="release_date" className="create-input" required></input>
                        </div>
                        <div className="desc-label">
                            <label>Description: </label>
                            <br /><Textarea
                                    required
                                    aria-label='Make a description'
                                    name='content'
                                    id='text'
                                    cols='25'
                                    rows='3'
                                    placeholder='Make a description'>
                                </Textarea>
                        </div>
                        <button className="post-btn" type='submit'>Create</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}