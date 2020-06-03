import React from 'react';
import { defaultProps, propTypes } from './props';
import { 
  MainViewWrapper,
  InputFeildWrapper,
  LineSepratorView,
 } from './styled';
import { AppHeader } from '../../components/app-header';
import { TittleText } from '../../components/tittle-text';
import { Button } from '../../components/button';
import { TextInput } from '../../components/textinput';

export const FirstNameScreen = () => {

  return (
    <MainViewWrapper>
      <AppHeader 
        headerText = 'CIRCLES'
      />
      <InputFeildWrapper>
      <TittleText  
        tittleText= 'What is your first name ?'
      />
      <TextInput/>
      <LineSepratorView/>
      </InputFeildWrapper>
      <Button
        buttonText = 'Continue'
      />
    </MainViewWrapper>
  );
};

FirstNameScreen.defaultProps = defaultProps;
FirstNameScreen.propTypes = propTypes;
