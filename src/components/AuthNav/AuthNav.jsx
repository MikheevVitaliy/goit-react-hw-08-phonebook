import { NavigLink } from 'components/Layout/Layout.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavigLink to="/register">Register</NavigLink>
      <NavigLink to="/login">Log In</NavigLink>
    </div>
  );
};
