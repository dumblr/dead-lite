import React from 'react';

import Menu from '../Icons/Menu';
import Trash from '../Icons/Trash';
import DeleteModal from '../DeleteModal';

class EditMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      toggleMenuOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };

  toggleMenuOpen = () => {
    this.setState({
      toggleMenuOpen: !this.state.toggleMenuOpen
    });
  };

  render() {
    return (
      <div className="EditMenu">
        <div className="EditMenu__Toggle" onClick={this.toggleMenuOpen}>
          <Menu />
        </div>
        <div
          className={`EditMenu__Drawer ${
            this.state.toggleMenuOpen ? 'EditMenu__Drawer--Open' : ''
          }`}
        >
          <div className="EditMenu__Drawer__Item" onClick={this.toggleModal}>
            <Trash />
          </div>
        </div>
        <DeleteModal
          deletePost={this.props.deletePost}
          postId={this.props.postId}
          showModal={this.state.toggleModal}
          toggleModal={this.toggleModal}
          toggleMenuOpen={this.toggleMenuOpen}
        />
      </div>
    );
  }
}

export default EditMenu;
