import React from 'react';
import DeadParagraph from '../../../DeadParagraph';
import remark from 'remark';
import reactRenderer from 'remark-react';
import DeadLink from '../../../DeadLink/index';

const ImagePost = ({ postTitle, imageSource, textContent }) => {
  return (
    <div className={'ImagePost'}>
      <img src={imageSource} alt={postTitle} />
      <div>
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
    </div>
  );
};

export default ImagePost;
