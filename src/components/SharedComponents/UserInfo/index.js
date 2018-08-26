import React from 'react';

const UserInfo = ({ deadTitle, deadDescription }) => (
  <div className="UserInfo">
    <h1>{deadTitle}</h1>
    <p>{deadDescription}</p>
  </div>
);

export default UserInfo;
