import React from 'react';

const DeadLink = ({ href, children }) => (
  <a href={href} target="_blank">
    {children}
  </a>
);

export default DeadLink;
