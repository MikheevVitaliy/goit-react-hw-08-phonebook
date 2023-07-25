import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: #b70a0a;

  font-size: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;

  :hover {
    background-color: #8e0000;
  }
  :active {
    background-color: #690000;
  }
`;
