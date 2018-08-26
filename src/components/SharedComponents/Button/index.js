import React from 'react';

const Button = props => {
  if (props.buttonClickFunction) {
    return (
      <a className={'Button'} onClick={() => props.buttonClickFunction()}>
        {props.buttonText ? props.buttonText : 'submit'}
      </a>
    );
  } else {
    return (
      <a className={'Button'}>
        {props.buttonText ? props.buttonText : 'submit'}
      </a>
    );
  }
};

export default Button;
