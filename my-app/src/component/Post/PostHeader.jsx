import React from 'react';

function PostHeader(props) {
  const { name, location, avatar } = props;
  return (
    <header>
      <div className="Post-user">
        <div className="Post-user-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="Post-user-nickname">
          <div>{name}</div>
          <div className="Post-user-location">{location}</div>
        </div>
      </div>
    </header>
  );
}

export default PostHeader;
