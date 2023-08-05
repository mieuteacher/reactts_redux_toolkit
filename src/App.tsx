import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RootStore } from './stores';
import { postAction } from './stores/slices/post.slice';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const postStore = useSelector(store => (store as RootStore).postStore)

  useEffect(() => {
    // vừa vào web thì gọi apis và set data
    axios.get("http://localhost:3000/posts")
    .then(res => {
      dispatch(postAction.setPost(res.data))
    })
  }, [])
  return (
    <div className="App">
        <h1>Hello App Post</h1>
        <ul>
          {
            postStore.data.map((post, index) => (
              <li key={Date.now() * Math.random()}>ID: {post.id} ^^ Title: {post.title}</li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
