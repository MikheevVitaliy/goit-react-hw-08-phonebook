import {
  Container,
  Form,
  Input,
  Label,
  Span,
  Submit,
} from 'components/RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Span>Log In</Span>
        <Label>
          Email
          <Input type="email" name="email" required autoComplete="off" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required autoComplete="off" />
        </Label>
        <Submit type="submit">Log In</Submit>
      </Form>
    </Container>
  );
};
