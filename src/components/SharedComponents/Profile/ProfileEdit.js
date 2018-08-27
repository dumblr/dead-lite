import React from 'react';

const ProfileEdit = ({
  userAvatar,
  userName,
  userBio,
  changeFn,
  updateUserData
}) => (
  <div className="Profile__Edit">
    <form onSubmit={e => updateUserData(e)}>
      <div
        className={`${'FormElement'} ${
          userAvatar !== '' ? 'FormElementActive' : ''
        }`}
      >
        <input
          type="text"
          name="title-avatar"
          value={userAvatar}
          onChange={e => changeFn(e, 'avatar')}
        />
        <label htmlFor="title-avatar">Avatar</label>
      </div>
      <div
        className={`${'FormElement'} ${
          userName !== '' ? 'FormElementActive' : ''
        }`}
      >
        <input
          type="text"
          name="title-name"
          value={userName}
          onChange={e => changeFn(e, 'name')}
        />
        <label htmlFor="title-name">Name</label>
      </div>
      <div
        className={`${'FormElement'} ${
          userBio !== '' ? 'FormElementActive' : ''
        }`}
      >
        <input
          type="text"
          name="title-bio"
          value={userBio}
          onChange={e => changeFn(e, 'bio')}
        />
        <label htmlFor="title-bio">Bio</label>
      </div>
      <button className={'Button'} type="submit">
        Save Profile
      </button>
    </form>
  </div>
);

export default ProfileEdit;
