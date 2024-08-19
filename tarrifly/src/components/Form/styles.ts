import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 300px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
