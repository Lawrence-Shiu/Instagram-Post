import * as actions from './actionTypes';

/**
 * state object
 * state: {
 *   liked: boolean,
 *   comments: [
 *     {
 *       id: number,
 *       author: string,
 *       description: string,
 *       liked: boolean,
 *       replies: [],
 *       avatar: string,
 *     }
 *   ]
 * }
 */

let lastId = 0;

export default function reducer(
  state = { liked: false, comments: [] },
  action
) {
  switch (action.type) {
    case actions.COMMENT_ADDED:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: ++lastId,
            author: action.payload.author,
            description: action.payload.description,
            avatar: action.payload.avatar,
            liked: false,
            replies: [],
          },
        ],
      };
    case actions.COMMENT_LIKED:
      return {
        ...state,
        comments: [
          ...state.comments.map(comment =>
            comment.id === action.payload.id
              ? { ...comment, liked: action.payload.liked }
              : comment
          ),
        ],
      };
    case actions.POST_LIKED:
      return {
        ...state,
        liked: action.payload.liked,
      };
    case actions.COMMENTS_SET:
      return {
        ...state,
        comments: action.payload.comments,
      };
    default:
      return state;
  }
}
