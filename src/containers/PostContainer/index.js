import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import UserInfo from '../../components/SharedComponents/UserInfo';
import urlEnv from '../../utils/urlEnv';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postDisplay: 'mine',
      postData: {}
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(urlEnv());
    this.getPost(this.props.match.params.postId, archive);
  }

  togglePostDisplay = val => {
    this.setState({
      postDisplay: val
    });
  };

  getPost = async (postId, archive) => {
    const myPost = await archive.readFile('/posts/' + postId + '.json');
    const post = JSON.parse(myPost);
    this.setState({
      postData: post
    });
  };

  render() {
    return (
      <div className="App">
        {this.props.isOwner && (
          <Header
            contentSelectionOpen={this.props.contentSelectionOpen}
            toggleContentSelection={this.props.toggleContentSelection}
            togglePostDisplay={this.props.togglePostDisplayFn}
            getPosts={this.props.getPosts}
            postDisplay={this.state.postDisplay}
            hideMineToggle={true}
          />
        )}
        {!this.props.isOwner && (
          <UserInfo
            deadTitle={this.props.deadTitle}
            deadDescription={this.props.deadDescription}
          />
        )}
        <Post
          post={this.state.postData}
          isOwner={this.props.isOwner}
          correctBrowser={this.props.correctBrowser}
          deletePost={this.props.deletePost}
        />
      </div>
    );
  }
}

export default PostContainer;
