import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Container,
  Form,
  Input,
  Label,
  Span,
  Submit,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Span>Register</Span>
        <Label>
          Username
          <Input type="text" name="name" required autoComplete="off" />
        </Label>

        <Label>
          Email
          <Input type="email" name="email" required autoComplete="off" />
        </Label>

        <Label>
          Password
          <Input type="password" name="password" required autoComplete="off" />
        </Label>

        <Submit type="submit">Register</Submit>
      </Form>
    </Container>
  );
};
