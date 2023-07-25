import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 320px;
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const NavigLink = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #454d5d;
  }

  &.active {
    color: white;
    background-color: #1a202c;

    :hover {
      background-color: #454d5d;
    }
  }
`;
