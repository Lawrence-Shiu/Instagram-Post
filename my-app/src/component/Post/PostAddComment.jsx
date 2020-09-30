import React from 'react';
import Button from 'react-bootstrap/Button';

function PostAddComment(props) {
  const { replyRef, text, onCommentChange, onSubmit } = props;

  const postButtonClass =
    text.trim().length === 0 ? 'post-button disabled' : 'post-button';

  const keyPress = e => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };

  return (
    <form className="add-comment">
      <div className="justify-content">
        <input
          ref={replyRef}
          className="comment-input"
          type="text"
          value={text}
          onChange={onCommentChange}
          placeholder="Add a comment..."
          onKeyDown={keyPress}
        />
        <Button
          type="button"
          variant="link"
          className={postButtonClass}
          onClick={onSubmit}
        >
          Post
        </Button>
      </div>
    </form>
  );
}

export default PostAddComment;
