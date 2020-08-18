import styled, {css} from 'styled-components/native';

interface TextInputProps {
  isErrored: boolean;
}

export const TextInput = styled.TextInput<TextInputProps>`
  width: 100%;
  color: #6c6c80;
  font-size: 16px;
  border-radius: 10px;
  border-width: 2px;
  padding: 16px;

  border-width: 2px;
  border-color: #232129;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;
