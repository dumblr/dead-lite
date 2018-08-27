import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import UserInfo from '../../components/SharedComponents/UserInfo';
import urlEnv from '../../utils/urlEnv';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {}
    };
  }

  async componentDidMount() {
    const archive = await new global.DatArchive(urlEnv());
    this.getPost(this.props.match.params.postId, archive);
  }

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
            getPosts={this.props.getPosts}
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
