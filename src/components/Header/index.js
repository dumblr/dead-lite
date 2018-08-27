import React from 'react';
import ContentSelection from '../ContentSelection';

const Header = ({
  getPosts,
  contentSelectionOpen,
  postDisplay,
  togglePostDisplay,
  toggleContentSelection,
  hideMineToggle,
  userData
}) => (
  <header className={`Header`}>
    <div className={`Header__Nav`}>
      <a
        className={`${'ContentToggle'} ${
          contentSelectionOpen ? 'ContentToggle_Open' : ''
        }`}
        onClick={() => toggleContentSelection()}
      >
        <img src="/icons/icon-plus.svg" alt="plus icon" />
      </a>
      <div
        className={`ContentDisplayToggle ${
          hideMineToggle ? 'ContentDisplayToggle--Hide' : ''
        }`}
      >
        <a
          className={`
          ${'ContentDisplayToggle__Item'} 
          ${postDisplay === 'mine' ? 'ContentDisplayToggle__Item_Selected' : ''}
        `}
          onClick={() => togglePostDisplay('mine')}
        >
          <img src="/icons/icon-smile.svg" alt="show my posts" />
        </a>
        <a
          className={`
          ${'ContentDisplayToggle__Item'} 
          ${
            postDisplay === 'settings'
              ? 'ContentDisplayToggle__Item_Selected'
              : ''
          }
        `}
          onClick={() => togglePostDisplay('settings')}
        >
          <img src="/icons/icon-settings.svg" alt="" />
        </a>
      </div>
      <a
        href="/"
        className={`HomeArrow ${!hideMineToggle ? 'HomeArrow--Hide' : ''}`}
      >
        <img src="/icons/icon-arrow.svg" alt="return home arrow" />
      </a>
    </div>

    <ContentSelection
      getPosts={getPosts}
      open={contentSelectionOpen}
      toggleContentSelection={toggleContentSelection}
      userData={userData}
    />
  </header>
);

export default Header;
