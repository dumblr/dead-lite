import React from 'react';
import { v4 } from 'uuid';

import fileContents from './../../../utils/fileContents';
import TextForm from './TextForm';
import urlEnv from '../../../utils/urlEnv';

class TextPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: ''
      // whisperContent: ''
    };
  }

  fieldChange = (e, str) => {
    this.setState({
      [str]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(this.state.titleContent, this.state.textContent);
  };

  writePost = async (titleContent, textContent) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(urlEnv());
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(
        titleContent,
        textContent,
        '',
        newPostId,
        'text',
        this.props.userData.name,
        this.props.userData.avatar
      )
    );
    //--- TODO Add Post Author above here...

    this.setState({
      titleContent: '',
      textContent: ''
    });

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
  };

  render() {
    return (
      <div className={'TextPost'}>
        <TextForm
          changeFn={this.fieldChange}
          submitFn={this.formSubmit}
          titleContent={this.state.titleContent}
          textContent={this.state.textContent}
        />
      </div>
    );
  }
}

export default TextPost;
