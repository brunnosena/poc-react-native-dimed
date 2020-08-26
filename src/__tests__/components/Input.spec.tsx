import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import Input from '../../components/Input';

describe('Input component', () => {
  it('should be able to render an input', () => {
    const {getByTestId} = render(
      <Input name="usuario" placeholder="Digite o usuário/repositório" />,
    );

    const inputSearch = getByTestId('input-search');

    expect(inputSearch).toBeTruthy();
  });

  it('should be to show highlight on case the error', async () => {
    const {getByTestId} = render(
      <Input
        name="usuario"
        placeholder="Digite o usuário/repositório"
        error={true}
      />,
    );
    const inputSearch = getByTestId('input-search');

    expect(inputSearch).toHaveStyle({borderColor: '#c53030'});
  });
});
