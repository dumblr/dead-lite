import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';
import BrowserDetection from '../../components/SharedComponents/BrowserDetection';
import UserInfo from '../../components/SharedComponents/UserInfo';
const ContentViewContainer = ({
  loading,
  getPosts,
  toggleContentSelection,
  posts,
  contentSelectionOpen,
  correctBrowser,
  deletePost,
  isOwner,
  deadTitle,
  deadDescription,
  userData
}) => (
  <div className="App">
    {isOwner && (
      <Header
        contentSelectionOpen={contentSelectionOpen}
        getPosts={getPosts}
        toggleContentSelection={toggleContentSelection}
        userData={userData}
      />
    )}
    {!isOwner && (
      <UserInfo deadTitle={deadTitle} deadDescription={deadDescription} />
    )}
    {console.log(posts)}
    {!correctBrowser && <BrowserDetection />}
    {loading ? (
      <div />
    ) : (
      <ContentView
        deletePost={deletePost}
        posts={posts}
        correctBrowser={correctBrowser}
        isOwner={isOwner}
      />
    )}
  </div>
);

export default ContentViewContainer;
