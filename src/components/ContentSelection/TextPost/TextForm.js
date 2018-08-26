import React from 'react';

// import Button from '../../SharedComponents/Button';

const TextForm = ({ changeFn, submitFn, titleContent, textContent }) => (
  <form onSubmit={e => submitFn(e)}>
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
    <div
      className={`${'FormElement'} ${'FormElementTextArea'} ${
        textContent !== '' ? 'FormElementActive' : ''
      }`}
    >
      <textarea
        value={textContent}
        rows="10"
        onChange={e => changeFn(e, 'textContent')}
      />
      <label htmlFor="content-entry">Content</label>
    </div>
    <button className={'Button'} type="submit">
      Submit
    </button>
  </form>
);

export default TextForm;
