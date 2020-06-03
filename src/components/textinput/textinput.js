import React, { useState } from 'react';
import { defaultProps, propTypes } from './props';
import { TextInputWrapper } from './styled'

export const TextInput = () => {

  // state
  const [value, onChangeText] = useState('');

 // onChangeTextHandler handler
  const onChangeTextHandler = (text) => onChangeText(text);

  return (
    <TextInputWrapper
      onChangeText={onChangeTextHandler}
      value={value}
      placeholder='Name'
      selectionColor='#000000'
    />
  );
};

TextInput.defaultProps = defaultProps;
TextInput.propTypes = propTypes;
