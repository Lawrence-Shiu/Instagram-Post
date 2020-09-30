import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostFooter(props) {
  const {
    name,
    caption,
    comments,
    onCommentLike,
    avatar,
    onClickReply,
    onReplyLike,
  } = props;

  const [showReplies, setShowReplies] = useState(
    new Array(comments.length).fill(false)
  );

  // render likes for both replies and comments
  const renderLikes = response => {
    if (response.likes === 0) return;
    const likeText = response.likes === 1 ? 'like' : 'likes';
    return (
      <span className="Comment-likes cursor">
        {response.likes} {likeText}
      </span>
    );
  };

  // render reply botton
  // commentId not null means responding to reply otherwise comment
  const renderReplyButton = (response, commentId) => {
    const replyFunc =
      commentId !== null
        ? () => onClickReply(commentId, response.author)
        : () => onClickReply(response.id, response.author);
    return (
      <span className="Reply-btn cursor" onClick={replyFunc}>
        reply
      </span>
    );
  };

  const renderAuthorAndDescription = response => {
    return (
      <div>
        <strong>{response.author}</strong> {response.description}{' '}
      </div>
    );
  };

  // render the hour, likes, reply underneath all responses
  const renderCommentInfo = (response, commentId) => {
    return (
      <div className="Comment-info">
        <span className="Time-elapsed cursor">{response.timeElapsed}</span>

        {renderLikes(response)}

        {renderReplyButton(response, commentId)}
      </div>
    );
  };

  // show and hide more button for viewing replies
  const renderReplyHeader = comment => {
    if (comment.replies.length === 0) return;
    const newShowReplies = [...showReplies];
    newShowReplies[comment.id] = !showReplies[comment.id];
    if (showReplies[comment.id]) {
      return (
        <>
          <div className="Comment-likes View-replies cursor">
            <span onClick={() => setShowReplies(newShowReplies)}>
              Hide replies
            </span>
          </div>
          {renderReplies(comment)}
        </>
      );
    } else {
      return (
        <div className="Comment-likes View-replies cursor">
          <span onClick={() => setShowReplies(newShowReplies)}>
            View replies ({comment.replies.length})
          </span>
        </div>
      );
    }
  };

  // body: avatar, author, description, heart button, time, like, reply
  const renderReplyBody = (reply, comment) => {
    return (
      <div className="Flex">
        <img src={reply.avatar} alt={reply.author} />
        <span>
          {renderAuthorAndDescription(reply)}
          {renderCommentInfo(reply, comment.id)}
        </span>
      </div>
    );
  };

  // body: avatar, author, description, heart button, time, like, reply
  const renderCommentBody = comment => {
    return (
      <div className="Flex">
        <img src={comment.avatar} alt={comment.author} />
        <div>
          {renderAuthorAndDescription(comment)}
          {renderCommentInfo(comment, null)}
          {comment.replies !== 0 && renderReplyHeader(comment)}
        </div>
      </div>
    );
  };

  const renderReplies = comment => {
    return (
      <div>
        {comment.replies.map(reply => {
          const heartClass = reply.liked ? ['fas', 'heart'] : ['far', 'heart'];
          const heartColor = reply.liked ? 'red' : 'muted';
          return (
            <div key={reply.id}>
              <span className="Post-reply-description-row">
                {renderReplyBody(reply, comment)}

                <FontAwesomeIcon
                  icon={heartClass}
                  className={`Heart-reply cursor mt-1 ${heartColor}`}
                  onClick={() => onReplyLike(comment.id, reply.id)}
                />
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderComments = comments => {
    return comments.map(comment => {
      const heartClass = comment.liked ? ['fas', 'heart'] : ['far', 'heart'];
      const heartColor = comment.liked ? 'red' : 'muted';
      return (
        <div key={comment.id}>
          <span className="Post-caption-description-row">
            {renderCommentBody(comment)}

            <FontAwesomeIcon
              icon={heartClass}
              className={`Heart-comment cursor ${heartColor}`}
              onClick={() => onCommentLike(comment.id)}
            />
          </span>
        </div>
      );
    });
  };

  return (
    <div className="Post-caption-row">
      <img src={avatar} alt={name} />
      <strong>{name}</strong> {caption}
      {comments && renderComments(comments)}
    </div>
  );
}

export default PostFooter;
