import React from 'react';
import ContentItem from '../../components/ContentView/ContentItem';

const Post = ({ post, deletePost, isOwner, correctBrowser }) => {
  return (
    <div className={`Post`}>
      <ContentItem
        correctBrowser={correctBrowser}
        deletePost={deletePost}
        isOwner={isOwner}
        vals={post}
      />
    </div>
  );
};

export default Post;
