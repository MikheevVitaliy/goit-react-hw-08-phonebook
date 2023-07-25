import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const FieldInput = styled.input`
  padding: 5px;
  margin-top: 5px;

  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #21c53c;
  padding: 8px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  color: #ffffff;

  :hover {
    background-color: #0c9422;
  }
  :active {
    background-color: #056e17;
  }
`;
