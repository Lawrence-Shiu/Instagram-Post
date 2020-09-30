import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostHeader(props) {
  const { name, location, avatar, isLandscapeMode } = props;
  console.log(isLandscapeMode);
  return (
    <header>
      <div className="Post-user">
        <div className="Post-user-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="Post-user-nickname">
          <span>
            <div>
              {name} {isLandscapeMode && '• Following'}
            </div>
            <div className="Post-user-location">{location}</div>
          </span>
          <span className="More-options">...</span>
        </div>
      </div>
    </header>
  );
}

export default PostHeader;
