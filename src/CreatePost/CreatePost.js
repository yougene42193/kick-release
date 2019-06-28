import React from 'react';
import './CreatePost.css'
import ApiService from '../services/post-api-service';

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
                            <select name="brand" required>
                                <option value=''>-Select Brand-</option>
                                <option value='Adidas'>Adidas</option>
                                <option value='Jordan'>Jordan</option>
                                <option value='Nike'>Nike</option>
                                <option value='Yeezy'>Yeezy</option>
                            </select>
                        </div>
                        <div className="shoe-label">
                            <label>Shoe Name: </label>
                            <input type="text" name="title" required></input>
                        </div>
                        <div className="release-label">
                            <label>Release Date: </label>
                            <input type="date" name="release_date" required></input>
                        </div>
                        <div className="desc-label">
                            <label>Description: </label>
                            <input type="text" placeholder="Add any links" name="content"></input>
                        </div>
                        <button className="post-btn" type='submit'>Create</button>
                    </form>
                </fieldset>
            </section>
        )
    }
}