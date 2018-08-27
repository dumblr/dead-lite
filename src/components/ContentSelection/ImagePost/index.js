import React from 'react';
import { v4 } from 'uuid';

import fileContents from './../../../utils/fileContents';
import ImageForm from './ImageForm';
import urlEnv from '../../../utils/urlEnv';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '',
      textContent: '',
      imageFile: ''
    };
  }

  async componentDidMount() {}

  fieldChange = (e, str) => {
    this.setState({
      [str]: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.writePost(
      this.state.titleContent,
      this.state.textContent,
      this.state.imageFile
    );
  };

  handleFiles = async () => {
    let getFiles = document.getElementById('file').files;
    if (getFiles.length > 0) {
      let f = getFiles[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.setState({
          imageFile: reader.result
        });
      };
      reader.readAsDataURL(f);
    }
  };

  writePost = async (titleContent, textContent) => {
    const newPostId = await v4();
    const archive = await new global.DatArchive(urlEnv());

    const imageFile = this.state.imageFile;

    // const imagesArray = ['/images/69.jpg', '/images/69.jpg']
    await archive.writeFile(
      `/posts/${newPostId}.json`,
      fileContents(
        titleContent,
        textContent,
        imageFile,
        newPostId,
        'image',
        this.props.userData.name,
        this.props.userData.avatar
      )
    );

    this.setState(
      {
        titleContent: '',
        textContent: '',
        imageFile: ''
      },
      () => {
        document.getElementById('file').value = null;
      }
    );

    this.props.getPosts(archive);
    this.props.toggleContentSelection();
  };

  resetImagePath = () => {
    this.setState({
      imageFile: ''
    });
  };

  render() {
    return (
      <div className={'ImagePost'}>
        <ImageForm
          changeFn={this.fieldChange}
          submitFn={this.formSubmit}
          titleContent={this.state.titleContent}
          textContent={this.state.textContent}
          handleFiles={this.handleFiles}
          imageFile={this.state.imageFile}
          resetImagePath={this.resetImagePath}
        />
      </div>
    );
  }
}

export default ImagePost;
