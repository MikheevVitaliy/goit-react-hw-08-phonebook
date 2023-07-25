// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { NavigLink } from 'components/Layout/Layout.styled';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {<NavigLink to="/">Home</NavigLink>}
      {isLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
    </Nav>
  );
};
