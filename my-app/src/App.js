import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Header from './component/Header';
import Post from './component/Post';
import store from './component/Post/store';
import { mockPosts } from './mockData';

function App() {
  library.add(faHeart, faHeartReg, faComment, faPaperPlane, faBookmark);

  const renderPosts = posts => {
    return posts.map(post => (
      <div key={post.id}>
        <Provider store={store}>
          <Post
            name={post.name}
            location={post.location}
            caption={post.caption}
            avatar={post.avatar}
            img={post.img}
            initComments={post.comments}
            initialLikes={post.numberOfLikes}
            postLiked={post.postLiked}
          />
        </Provider>
      </div>
    ));
  };

  return (
    <div>
      <Header />
      {renderPosts(mockPosts)}
    </div>
  );
}

export default App;
