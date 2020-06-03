import React from 'react';
import { defaultProps, propTypes } from './props';
import { TextWrapper } from './styled';

export const TittleText = ({
  tittleText
}) => (
    <TextWrapper>
        {tittleText}
    </TextWrapper>
  );

TittleText.defaultProps = defaultProps;
TittleText.propTypes = propTypes;
