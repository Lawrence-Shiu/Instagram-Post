import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function PostAddComment(props) {
  const [text, setText] = useState('');

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const postButtonClass =
    text.trim().length === 0 ? 'post-button disabled' : 'post-button';

  const onSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      setText('');
      props.onSubmit('Lawrence', text, '');
    }
  };

  const keyPress = e => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };

  return (
    <form className="add-comment">
      <div className="justify-between">
        <input
          className="comment-input"
          type="text"
          value={text}
          onChange={handleTextChange}
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
