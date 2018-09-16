import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispach => { //ES6
    console.log('fetching')

        fetch('https://jsonplaceholder.typicode.com/posts')

        .then (res => res.json())

        .then(posts => dispach({
          type: FETCH_POSTS,

          payload: posts
        }))

  };

  

  export const createPost = (postData) => dispach => {
 
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())

      
      .then(post => dispach({
        type: NEW_POST,
        payload: post
      }));
  };