import React from 'react';
import ContentItem from '../ContentItem';

const ContentViewLoop = ({ posts, deletePost, isOwner }) => (
  <div>
    {posts.length > 0 ? (
      posts.map((x, i) => (
        <ContentItem
          deletePost={deletePost}
          isOwner={isOwner}
          vals={x}
          key={i}
        />
      ))
    ) : (
      <p>Sorry, no posts dumb dumb.</p>
    )}
  </div>
);

export default ContentViewLoop;
