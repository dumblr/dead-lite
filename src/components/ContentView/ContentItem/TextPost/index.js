import React from 'react';
import DeadParagraph from '../../../DeadParagraph';
import remark from 'remark';
import reactRenderer from 'remark-react';
import DeadLink from '../../../DeadLink/index';

const TextPost = ({ textContent }) => {
  return (
    <div className={'TextPost'}>
      {
        remark()
          .use(reactRenderer, {
            remarkReactComponents: {
              p: DeadParagraph,
              a: DeadLink
            }
          })
          .processSync(textContent).contents
      }
    </div>
  );
};

export default TextPost;
