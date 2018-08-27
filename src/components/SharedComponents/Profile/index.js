import React from 'react';

import ProfileEdit from './ProfileEdit';

const Profile = ({
  userAvatar,
  userName,
  userBio,
  editProfile,
  changeFn,
  updateUserData
}) => (
  <div className="Profile">
    {editProfile ? (
      <ProfileEdit
        changeFn={changeFn}
        userAvatar={userAvatar}
        userName={userName}
        userBio={userBio}
        updateUserData={updateUserData}
      />
    ) : (
      <div>
        <div className="Profile__Avatar">
          <p className="label">Avatar</p>
          {userAvatar}
        </div>
        <div className="Profile__Name">
          <p className="label">Name</p>
          <p>{userName}</p>
        </div>
        <div className="Profile__Bio">
          <p className="label">Bio</p>
          <p>{userBio}</p>
        </div>
      </div>
    )}
  </div>
);

export default Profile;
