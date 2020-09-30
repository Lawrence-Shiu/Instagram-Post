import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import './Post.css';

import store from './store';
import {
  commentLike,
  commentAdd,
  postLike,
  initializeStore,
  setNumberOfLikes,
  replyAdd,
  replyLike,
} from './actions';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostAddComment from './PostAddComment';
import PostActionIcons from './PostActionIcons';
import PostComments from './PostComments';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandscapeMode: false,
      isReply: false,
      reply: {
        id: 0,
        author: '',
      },
      commentText: '',
    };
  }

  componentDidMount() {
    this.props.initializeStore(
      this.props.postLiked,
      this.props.initComments,
      this.props.initialLikes
    );
  }

  render() {
    const { name, location, caption, avatar, img } = this.props;
    const replyRef = createRef();

    const handlePostLike = () => {
      const liked = !store.getState().liked;
      postLike(liked);
      if (liked) {
        setNumberOfLikes(store.getState().numberOfLikes + 1);
      } else {
        setNumberOfLikes(store.getState().numberOfLikes - 1);
      }
    };

    const handleCommentLike = id => {
      const liked = !store
        .getState()
        .comments.find(comment => comment.id === id).liked;
      commentLike(id, liked);
    };

    const handlePost = e => {
      e.preventDefault();
      if (this.state.commentText.trim() !== '') {
        if (this.state.isReply) {
          handleReplyAdd();
        } else {
          handleCommentAdd();
        }
      }
    };

    const handleReplyAdd = () => {
      this.setState({
        ...this.state,
        commentText: '',
        isReply: false,
        reply: { id: 0, author: '' },
      });
      replyAdd(
        'Lawrence',
        this.state.commentText,
        'https://vignette.wikia.nocookie.net/thegamesrp/images/2/26/Aang.jpg/revision/latest?cb=20141124183149',
        this.state.reply.id
      );
    };

    const handleCommentAdd = () => {
      this.setState({ ...this.state, commentText: '' });
      commentAdd(
        'Lawrence',
        this.state.commentText,
        'https://vignette.wikia.nocookie.net/thegamesrp/images/2/26/Aang.jpg/revision/latest?cb=20141124183149'
      );
    };

    const handleClickReply = (id, author) => {
      replyRef.current.focus();
      this.setState({
        ...this.state,
        isReply: true,
        reply: { id, author },
        commentText: `@${author} `,
      });
    };

    const handleReplyLike = (commentId, replyId) => {
      const liked = !store
        .getState()
        .comments.find(comment => comment.id === commentId)
        .replies.find(reply => reply.id === replyId).liked;
      replyLike(commentId, replyId, liked);
    };

    const handleCommentChange = e => {
      this.setState({ ...this.state, commentText: e.target.value });
    };

    const handleClickComment = () => {
      this.setState({ isLandscapeMode: true });
    };

    const renderPortraitMode = () => {
      return (
        <>
          <PostHeader
            name={name}
            location={location}
            avatar={avatar}
            isLandscapeMode={this.state.isLandscapeMode}
          />
          <PostBody img={img} />
          <PostActionIcons
            onPostLike={handlePostLike}
            liked={store.getState().liked}
            numberOfLikes={store.getState().numberOfLikes}
            onClickComment={handleClickComment}
          />
          <PostFooter
            name={name}
            caption={caption}
            comments={store.getState().comments}
            onCommentLike={handleCommentLike}
            onClickComment={handleClickComment}
          />
          <PostAddComment
            onSubmit={handlePost}
            text={this.state.commentText}
            onCommentChange={handleCommentChange}
            replyRef={replyRef}
          />
        </>
      );
    };

    const renderLandscapeMode = () => {
      return (
        <>
          <span>
            <PostBody img={img} />
          </span>
          <span>
            <PostHeader
              name={name}
              location={location}
              avatar={avatar}
              isLandscapeMode={this.state.isLandscapeMode}
            />
            <PostComments
              name={name}
              caption={caption}
              comments={store.getState().comments}
              onCommentLike={handleCommentLike}
              avatar={avatar}
              onClickReply={handleClickReply}
              onReplyLike={handleReplyLike}
            />
            <PostActionIcons
              onPostLike={handlePostLike}
              liked={store.getState().liked}
              numberOfLikes={store.getState().numberOfLikes}
            />
            <PostAddComment
              onSubmit={handlePost}
              text={this.state.commentText}
              onCommentChange={handleCommentChange}
              replyRef={replyRef}
            />
          </span>
        </>
      );
    };

    const renderPortraidOrLandscape = () => {
      if (this.state.isLandscapeMode) {
        return renderLandscapeMode();
      } else {
        return renderPortraitMode();
      }
    };

    const mode = this.state.isLandscapeMode ? 'Post-row' : 'Post';
    return <article className={mode}>{renderPortraidOrLandscape()}</article>;
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
