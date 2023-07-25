import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 22px;
  margin-right: 50px;
  color: #ffffff;

  @media (max-width: 380px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: #1a202c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #454d5d;
    color: red;
  }
`;
