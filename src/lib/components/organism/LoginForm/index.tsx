import React, { forwardRef } from 'react';
import { LoginFormProps } from './types';
import { Container, Form } from './styles';

const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>(
  ({ onSubmit, children, className }, ref) => {

  return (
    <Container>
      <Form ref={ref} className={className} onSubmit={onSubmit}>
        {children}
      </Form>
    </Container>
  );
});

export default LoginForm;
