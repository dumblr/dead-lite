import React from 'react';

import ImageDelete from '../../SharedComponents/Icons/ImageDelete';

const ImageForm = ({
  changeFn,
  submitFn,
  titleContent,
  textContent,
  handleFiles,
  imageFile,
  resetImagePath
}) => (
  <form onSubmit={e => submitFn(e)} encType="multipart/form-data">
    {console.log('imageFile', imageFile)}
    <div
      className={`${'FormElement'} ${
        titleContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <input
        type="text"
        name="title"
        value={titleContent}
        onChange={e => changeFn(e, 'titleContent')}
      />
      <label htmlFor="title-entry">Title</label>
    </div>
    {imageFile === '' ? (
      <div className={'Box'}>
        <input
          accept=".jpeg, .jpg, .png, .gif"
          className={'Box__File'}
          type="file"
          name="file"
          id="file"
          onChange={() => handleFiles()}
        />
        <label htmlFor="file">Choose a file or drag it here</label>
      </div>
    ) : (
      <div className="ImagePreview">
        <div className="ImagePreview__Delete" onClick={() => resetImagePath()}>
          <ImageDelete />
        </div>
        <img src={imageFile} alt="preview" />
      </div>
    )}

    <div
      className={`${'FormElement'} ${'FormElementTextArea'} ${
        textContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <textarea
        value={textContent}
        rows="2"
        onChange={e => changeFn(e, 'textContent')}
      />
      <label htmlFor="content-entry">Content</label>
    </div>
    <button className={'Button'} type="submit">
      Submit
    </button>
  </form>
);

export default ImageForm;
