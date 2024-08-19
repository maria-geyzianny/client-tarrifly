import React from 'react';
import { Form, Input, Label, Button } from './styles';

const FormComponent: React.FC = () => {
  return (
    <Form>
      <Label>Page Name:</Label>
      <Input type="text"  />

      <Label>Page Description:</Label>
      <Input type="text" />

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormComponent;
