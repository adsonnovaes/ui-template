// src/components/LoginForm.stories.tsx
import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import LoginForm from './index';

export default {
  title: 'Organism/LoginForm',
  component: LoginForm,
  args: {
    
  },
} as Meta;

export const Default = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginForm
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
      }}
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        type="submit"
        buttontype="default"
        size="medium"
        label="Enviar"
      />
    </LoginForm>
  );
};
