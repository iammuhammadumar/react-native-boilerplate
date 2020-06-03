import React from 'react';
import { Alert } from 'react-native'
import { defaultProps, propTypes } from './props';
import { 
  ButtonViewWrapper,
  ButtonText
} from './styled';

export const Button = ({
  buttonText
}) => (
    <ButtonViewWrapper
    onPress={()=> Alert.alert("Done")}
    >
      <ButtonText>
        {buttonText}
      </ButtonText>
    </ButtonViewWrapper>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
