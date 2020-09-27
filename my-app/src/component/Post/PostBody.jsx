import React from 'react';

function PostBody(props) {
  const { img } = props;
  return (
    <div className="Post-image">
      <div className="Post-image-bg">
        <img alt="Icon Living" src={img} />
      </div>
    </div>
  );
}

export default PostBody;
