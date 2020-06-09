import styled from 'styled-components/native';

export const TextWrapper = styled.Text`
  font-size: 40px;
  font-weight: bold;
  font-family: ${Platform.select({ ios: 'SFProDisplay-Regular', android: 'Inter-Regular' })};
`;
