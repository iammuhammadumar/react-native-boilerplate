import React from 'react';
import { defaultProps, propTypes } from './props';
import { 
  MainViewWrapper,
  ImageWrapper,
  HeaderText
} from './styled';

export const AppHeader = ({
  headerText
}) => {

  return (
    <MainViewWrapper>
      <ImageWrapper  
       source={require('../../../assets/images/backbutton.png')}
      />
      <HeaderText>
        {headerText}
      </HeaderText>
    </MainViewWrapper>
  );
};

AppHeader.defaultProps = defaultProps;
AppHeader.propTypes = propTypes;
