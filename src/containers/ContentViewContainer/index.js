import React from 'react';

import Header from '../../components/Header';
import ContentView from '../../components/ContentView';
import BrowserDetection from '../../components/SharedComponents/BrowserDetection';
import UserInfo from '../../components/SharedComponents/UserInfo';
const ContentViewContainer = ({
  loading,
  getPosts,
  postDisplay,
  togglePostDisplayFn,
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
        postDisplay={postDisplay}
        togglePostDisplay={togglePostDisplayFn}
        getPosts={getPosts}
        toggleContentSelection={toggleContentSelection}
        userData={userData}
      />
    )}
    {!isOwner && (
      <UserInfo deadTitle={deadTitle} deadDescription={deadDescription} />
    )}
    {!correctBrowser && <BrowserDetection />}
    {loading ? (
      <div />
    ) : (
      <ContentView
        deletePost={deletePost}
        postDisplay={postDisplay}
        posts={posts}
        correctBrowser={correctBrowser}
        isOwner={isOwner}
      />
    )}
  </div>
);

export default ContentViewContainer;
