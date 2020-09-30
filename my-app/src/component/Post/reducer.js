import * as actions from './actionTypes';

/**
 * state object
 * state: {
 *   liked: boolean,
 *   numberOfLikes: number,
 *   comments: [
 *     {
 *       id: number,
 *       author: string,
 *       description: string,
 *       liked: boolean,
 *       replies: [],
 *       avatar: string,
 *       lastReplyId: number,
 *     }
 *   ]
 * }
 */

let lastId = 0;

export default function reducer(
  state = { liked: false, numberOfLikes: 0, comments: [] },
  action
) {
  const newLike = response =>
    action.payload.liked ? response.likes + 1 : response.likes - 1;

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
            lastReplyId: 0,
            likes: 0,
            timeElapsed: 'now',
          },
        ],
      };
    case actions.COMMENT_LIKED:
      return {
        ...state,
        comments: [
          ...state.comments.map(comment =>
            comment.id === action.payload.id
              ? {
                  ...comment,
                  liked: action.payload.liked,
                  likes: newLike(comment),
                }
              : comment
          ),
        ],
      };
    case actions.REPLY_LIKED:
      return {
        ...state,
        comments: [
          ...state.comments.map(comment =>
            comment.id === action.payload.commentId
              ? {
                  ...comment,
                  replies: [
                    ...comment.replies.map(reply =>
                      reply.id === action.payload.replyId
                        ? {
                            ...reply,
                            liked: action.payload.liked,
                            likes: newLike(reply),
                          }
                        : reply
                    ),
                  ],
                }
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
      lastId = action.payload.comments.length;
      return {
        ...state,
        comments: action.payload.comments,
      };
    case actions.LIKES_SET:
      return {
        ...state,
        numberOfLikes: action.payload.numberOfLikes,
      };
    case actions.REPLY_ADDED:
      return {
        ...state,
        comments: [
          ...state.comments.map(comment =>
            comment.id === action.payload.id
              ? {
                  ...comment,
                  replies: [
                    ...comment.replies,
                    {
                      id: comment.lastReplyId + 1,
                      author: action.payload.author,
                      description: action.payload.description,
                      avatar: action.payload.avatar,
                      liked: false,
                      likes: 0,
                      timeElapsed: 'now',
                    },
                  ],
                  lastReplyId: comment.lastReplyId + 1,
                }
              : comment
          ),
        ],
      };
    default:
      return state;
  }
}
