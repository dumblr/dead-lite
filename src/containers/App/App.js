import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import sortBy from 'lodash.sortby';

import ContentViewContainer from '../ContentViewContainer';
import urlEnv from '../../utils/urlEnv';
import PostContainer from '../PostContainer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contentSelectionOpen: false,
      correctBrowser: true,
      isOwner: false,
      posts: [],
      postDisplay: 'theirs'
    };
  }

  async componentDidMount() {
    try {
      const archive = await new global.DatArchive(urlEnv());
      const archiveInfo = await archive.getInfo();
      const allPosts = await this.getAllPosts(archive);
      const userData = await this.getUserInfo(archive);

      this.setState({
        correctBrowser: true,
        posts: allPosts,
        loading: false,
        ...(archiveInfo.isOwner && { isOwner: true }),
        deadTitle: archiveInfo.title,
        deadDescription: archiveInfo.description,
        userData
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        correctBrowser: false
      });
    }
  }

  getUserInfo = async archive => {
    const userData = await archive.readFile(`profile.json`);
    return JSON.parse(userData);
  };

  setInfo = archiveInfo => {
    this.setState({
      ...(archiveInfo.isOwner && { isOwner: true }),
      deadTitle: archiveInfo.title,
      deadDescription: archiveInfo.description
    });
  };

  /*
  * This method takes an archive and
  * returns all of their posts. 
  * It does not setState.
  */
  getAllPosts = async archive => {
    const posts = await archive.readdir('/posts');
    if (posts.length === 0) {
      this.setState({
        posts: []
      });
    } else {
      const promises = posts.map(async post => {
        const postResponse = await archive.readFile(`/posts/${post}`);
        return JSON.parse(postResponse);
      });
      const results = await Promise.all(promises);
      return results;
    }
  };

  /*
  * Exact same as the above function, but
  * also sets state.
  */
  getAllPostsSaved = async archive => {
    const posts = await archive.readdir('/posts');
    if (posts.length === 0) {
      this.setState({
        posts: []
      });
    } else {
      const promises = posts.map(async post => {
        const postResponse = await archive.readFile(`/posts/${post}`);
        return JSON.parse(postResponse);
      });
      const results = await Promise.all(promises);
      this.setState({
        posts: results
      });
    }
  };

  toggleContentSelection = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contentSelectionOpen: !prevState.contentSelectionOpen
      };
    });
  };

  togglePostDisplay = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        postDisplay: val
      };
    });
  };

  deletePost = async postId => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(`/posts/${postId}.json`);
    this.getAllPostsSaved(archive);
  };

  deletePostSingle = async postId => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(`/posts/${postId}.json`);
    window.location.href = '/';
  };

  render() {
    const sortedPosts = sortBy(this.state.posts, ['createdAt']).reverse();
    console.log('state', this.state);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ContentViewContainer
                loading={this.state.loading}
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                postDisplay={this.state.postDisplay}
                posts={sortedPosts}
                isOwner={this.state.isOwner}
                getPosts={this.getAllPostsSaved}
                togglePostDisplayFn={this.togglePostDisplay}
                correctBrowser={this.state.correctBrowser}
                deletePost={this.deletePost}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
                userData={this.state.userData}
              />
            )}
          />
          <Route
            path="/post/:postId"
            render={props => (
              <PostContainer
                loading={this.state.loading}
                contentSelectionOpen={this.state.contentSelectionOpen}
                toggleContentSelection={this.toggleContentSelection}
                togglePostDisplayFn={this.togglePostDisplay}
                getPosts={this.getAllPostsSaved}
                isOwner={this.state.isOwner}
                correctBrowser={this.state.correctBrowser}
                deletePost={this.deletePostSingle}
                deadTitle={this.state.deadTitle}
                deadDescription={this.state.deadDescription}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
