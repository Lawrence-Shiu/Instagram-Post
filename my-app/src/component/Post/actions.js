import store from './store';
import * as actions from './actionTypes';

export const commentLike = (id, liked) =>
  store.dispatch({
    type: actions.COMMENT_LIKED,
    payload: {
      id,
      liked,
    },
  });

export const replyLike = (commentId, replyId, liked) => {
  store.dispatch({
    type: actions.REPLY_LIKED,
    payload: {
      commentId,
      replyId,
      liked,
    },
  });
};

export const commentAdd = (author, description, avatar) =>
  store.dispatch({
    type: actions.COMMENT_ADDED,
    payload: {
      author,
      description,
      avatar,
    },
  });

export const postLike = liked =>
  store.dispatch({
    type: actions.POST_LIKED,
    payload: {
      liked,
    },
  });

export const setNumberOfLikes = numberOfLikes =>
  store.dispatch({
    type: actions.LIKES_SET,
    payload: {
      numberOfLikes,
    },
  });

export const replyAdd = (author, description, avatar, id) =>
  store.dispatch({
    type: actions.REPLY_ADDED,
    payload: {
      author,
      description,
      avatar,
      id,
    },
  });

const setComments = comments =>
  store.dispatch({
    type: actions.COMMENTS_SET,
    payload: {
      comments,
    },
  });

export const initializeStore = (liked, comments, numberOfLikes) => {
  postLike(liked);
  setComments(comments);
  setNumberOfLikes(numberOfLikes);
};
