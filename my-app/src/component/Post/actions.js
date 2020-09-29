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

const setComments = comments =>
  store.dispatch({
    type: actions.COMMENTS_SET,
    payload: {
      comments,
    },
  });

export const initializeStore = (liked, comments) => {
  postLike(liked);
  setComments(comments);
};
