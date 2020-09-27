import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';

import store from './store';
import { commentLike, commentAdd, postLike, initializeStore } from './actions';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostAddComment from './PostAddComment';

class Post extends Component {
  componentDidMount() {
    this.props.initializeStore(true, this.props.initComments);
  }

  render() {
    const { name, location, caption, avatar, img } = this.props;

    const handlePostLike = () => {
      const liked = !store.getState().liked;
      postLike(liked);
    };

    const handleCommentLike = id => {
      const liked = !store
        .getState()
        .comments.find(comment => comment.id === id).liked;
      commentLike(id, liked);
    };

    const handleCommentAdd = (author, description, avatar) => {
      commentAdd(author, description, avatar);
    };

    return (
      <article className="Post">
        <PostHeader name={name} location={location} avatar={avatar} />
        <PostBody img={img} />
        <PostFooter
          name={name}
          caption={caption}
          comments={store.getState().comments}
          onCommentLike={handleCommentLike}
        />
        <PostAddComment onSubmit={handleCommentAdd} />
      </article>
    );
  }
}

const mapStateToProps = state => ({
  liked: state.liked,
  comments: state.comments,
});

const mapDispatchToProps = () => ({
  commentLike,
  commentAdd,
  postLike,
  initializeStore,
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
