import React from 'react';
import './App.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import Header from './component/Header';
import Post from './component/Post';
import { library } from '@fortawesome/fontawesome-svg-core';

function App() {
  library.add(faHeart, faHeartRegular);
  const mockPosts = [
    {
      id: 1,
      name: 'Sam',
      location: 'Tokyo, Japan',
      caption: 'Always looking forward',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      img:
        'https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&w=1000&q=80',
      comments: [
        {
          id: 1,
          author: 'Lawrence',
          description: "wow, that's beautiful!",
          replies: [],
          avatar: null,
        },
      ],
    },
  ];

  const renderPosts = posts => {
    return posts.map(post => (
      <div key={post.id}>
        <Post
          name={post.name}
          location={post.location}
          caption={post.caption}
          avatar={post.avatar}
          img={post.img}
          comments={post.comments}
        />
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
