import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchPosts } from './redux/actions/postsActions'
import { fetchComments } from './redux/actions/commentsActions'

let newStore = store()

axios.get(`http://localhost:8082/api/posts`)
  .then((response)=>{
    newStore.dispatch(fetchPosts(response.data))
  }).then(()=>{
    axios.get(`http://localhost:8082/api/comments`)
      .then((response)=>{
        newStore.dispatch(fetchComments(response.data))
      })

  })




ReactDOM.render(<Provider store={newStore}><App /></Provider>, document.getElementById('root'));
