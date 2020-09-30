import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostActionIcons(props) {
  const { onPostLike, liked, numberOfLikes, onClickComment } = props;
  const heartClass = liked ? ['fas', 'heart'] : ['far', 'heart'];
  const heartColor = liked ? 'red' : '';

  return (
    <div className="Action-icons">
      <div className="justify-content">
        <span>
          <FontAwesomeIcon
            icon={heartClass}
            className={`heart-class cursor mt-2 mr-0 fa-lg mb-0 ${heartColor}`}
            onClick={onPostLike}
          />
          <FontAwesomeIcon
            icon={['far', 'comment']}
            className={'cursor mt-2 ml-3 mr-0 fa-lg mb-0'}
            onClick={onClickComment}
          />
          <FontAwesomeIcon
            icon={['far', 'paper-plane']}
            className={'cursor mt-2 ml-3 mr-0 fa-lg mb-0'}
          />
        </span>
        <FontAwesomeIcon
          icon={['far', 'bookmark']}
          className={'cursor mt-2 ml-3 mr-3 fa-lg mb-0'}
        />
      </div>
      <span className="number-of-likes">{numberOfLikes} likes</span>
    </div>
  );
}

export default PostActionIcons;
