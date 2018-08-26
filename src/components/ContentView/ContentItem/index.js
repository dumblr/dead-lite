import React from 'react';

import TextPost from './TextPost';
import ImagePost from './ImagePost';
import EditMenu from '../../SharedComponents/EditMenu';

const ContentItem = ({ vals, deletePost, toggleDelete, isOwner }) => {
  let DateItem = new Date(vals.createdAt);
  let Minutes = (DateItem.getMinutes() < 10 ? '0' : '') + DateItem.getMinutes();
  let Time = DateItem.getHours() + `:` + Minutes;
  let Month = DateItem.getMonth();
  let Day = DateItem.getDate();
  let MonthWord;

  switch (true) {
    case Month === 0:
      MonthWord = 'January';
      break;
    case Month === 1:
      MonthWord = 'February';
      break;
    case Month === 2:
      MonthWord = 'March';
      break;
    case Month === 3:
      MonthWord = 'April';
      break;
    case Month === 4:
      MonthWord = 'May';
      break;
    case Month === 5:
      MonthWord = 'June';
      break;
    case Month === 6:
      MonthWord = 'July';
      break;
    case Month === 7:
      MonthWord = 'August';
      break;
    case Month === 8:
      MonthWord = 'September';
      break;
    case Month === 9:
      MonthWord = 'October';
      break;
    case Month === 10:
      MonthWord = 'November';
      break;
    case Month === 11:
      MonthWord = 'December';
      break;
    default:
      MonthWord = '';
  }
  return (
    <div className={'ContentItem'}>
      <div className={'ContentItem__Date'}>
        <p>
          {MonthWord}
          <br />
          {Day}
        </p>
      </div>
      <div className={'ContentItem__View'}>
        {isOwner && (
          <EditMenu
            deletePost={deletePost}
            postId={vals.postId}
            toggleDelete={toggleDelete}
          />
        )}
        <h2>
          {vals.author_avatar} {vals.postAuthor} @ {Time}
        </h2>
        <h3 className="ContentItem__Title">
          <a href={'/post/' + vals.postId}>{vals.titleContent}</a>
        </h3>
        {vals.postType === 'text' && (
          <TextPost textContent={vals.textContent} />
        )}
        {vals.postType === 'image' && (
          <ImagePost
            postTitle={vals.titleContent}
            textContent={vals.textContent}
            imageSource={vals.imageSource}
          />
        )}
      </div>
    </div>
  );
};

export default ContentItem;
