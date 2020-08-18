import React, {useRef} from 'react';
import {TextInput} from './styles';
import {TextInputProps} from 'react-native';

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({error, ...rest}) => {
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({value: ''});

  return (
    <TextInput
      isErrored={!!error}
      ref={inputElementRef}
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  );
};

export default Input;
