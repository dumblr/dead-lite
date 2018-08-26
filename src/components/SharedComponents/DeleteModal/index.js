import React from 'react';

const EditMenu = ({
  deletePost,
  postId,
  showModal,
  toggleModal,
  toggleMenuOpen
}) => (
  <div
    className={`DeleteModal ${showModal ? 'DeleteModal__Show' : ''}`}
    onClick={() => toggleModal()}
  >
    <div className="DeleteModal__Container">
      <span>You sure?</span>
      <span />
      <span onClick={() => toggleMenuOpen()}>
        <a className="Button" onClick={e => deletePost(postId)}>
          Delete
        </a>
      </span>
      <span>
        <a className="Button Button--White" onClick={() => toggleModal()}>
          Keep It
        </a>
      </span>
    </div>
  </div>
);

export default EditMenu;
