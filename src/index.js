import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker'
import './index.css';
import App from './App';
import { PostProvider } from './contexts/PostContext'
import { PostListProvider } from './contexts/PostListContext'

ReactDOM.render(
    <BrowserRouter>
        <PostListProvider>
            <PostProvider>
                <App />
            </PostProvider>
        </PostListProvider>
    </BrowserRouter>, 
    document.getElementById('root')
)

serviceWorker.unregister()