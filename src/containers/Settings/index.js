import React from 'react';

import Header from '../../components/Header';
import Profile from '../../components/SharedComponents/Profile';

const Settings = props => (
  <div className="Settings">
    <Header
      contentSelectionOpen={props.contentSelectionOpen}
      toggleContentSelection={props.toggleContentSelection}
      togglePostDisplay={props.togglePostDisplayFn}
      getPosts={props.getPosts}
      postDisplay={'settings'}
      hideMineToggle={true}
    />
    <div className="Settings__Container">
      <div className="Settings__Item">
        <div className="Settings__Title">
          <h2>Profile Settings</h2>
          <div className="Edit__Toggle" onClick={() => props.toggleEdit()}>
            <img src="/icons/icon-pencil.png" alt="pencil for edit" />
          </div>
        </div>
        <Profile
          userAvatar={props.userData.avatar && props.userData.avatar}
          userName={props.userData.name && props.userData.name}
          userBio={props.userData.bio && props.userData.bio}
          editProfile={props.editProfile}
          changeFn={props.userDataChange}
          updateUserData={props.updateUserData}
        />
      </div>
    </div>
  </div>
);

export default Settings;
