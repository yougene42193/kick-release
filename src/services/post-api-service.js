import TokenService from '../services/token-service'
import config from '../config';

const ApiService = {
    getPosts() {
        return fetch(`${config.API_ENDPOINT}/posts`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },
    getPost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getPostComments(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
    postComment(postId, text) {
        return fetch(`${config.API_ENDPOINT}/comments`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
          },
          body: JSON.stringify({
            post_id: postId,
            text,
          }),
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    postPost(user) {
        return fetch(`${config.API_ENDPOINT}/posts`, {
            method: 'POST',
            headers: {
                 'content-type': 'application/json',
            },
            body: JSON.stringify(user)
         })
             .then(res =>
                 (!res.ok)
                 ? res.json().then(e => Promise.reject(e))
                 : res.json()
             )
    },
   updatePost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postId)
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()    
            )
   },
    deletePost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
            })
    }
}

export default ApiService