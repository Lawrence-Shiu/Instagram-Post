import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostFooter(props) {
  const { name, caption, comments, onCommentLike, onClickComment } = props;
  const renderComments = comments => {
    // only show last 2 comments
    if (comments.length > 2) {
      comments = comments.slice(comments.length - 2);
    }
    return comments.map(comment => {
      const heartClass = comment.liked ? ['fas', 'heart'] : ['far', 'heart'];
      const heartColor = comment.liked ? 'red' : 'muted';
      return (
        <div key={comment.id}>
          <span className="Post-caption-description">
            <span>
              <strong>{comment.author}</strong> {comment.description}{' '}
            </span>
            <FontAwesomeIcon
              icon={heartClass}
              className={`cursor mt-1 ${heartColor}`}
              onClick={() => onCommentLike(comment.id)}
            />
          </span>
        </div>
      );
    });
  };

  const renderViewMoreComments = remLength => {
    if (remLength === 1) {
      return (
        <div className="muted cursor" onClick={onClickComment}>
          View 1 more comment
        </div>
      );
    }
    return (
      <div className="muted cursor" onClick={onClickComment}>
        View all {remLength} comments
      </div>
    );
  };

  return (
    <div className="Post-caption">
      <strong>{name}</strong> {caption}
      {comments.length > 2 && renderViewMoreComments(comments.length - 2)}
      {comments && renderComments(comments)}
    </div>
  );
}

export default PostFooter;
