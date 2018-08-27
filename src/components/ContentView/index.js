import React from 'react';

import ContentViewLoop from './ContentViewLoop';

const ContentView = ({ posts, deletePost, correctBrowser, isOwner }) => (
  <section className={'ContentView'}>
    {correctBrowser && (
      <ContentViewLoop
        deletePost={deletePost}
        posts={posts}
        isOwner={isOwner}
      />
    )}
  </section>
);

export default ContentView;
