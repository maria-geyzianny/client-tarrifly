import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 300px;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Comic Sans MS', cursive, sans-serif;

  &:hover {
    background-color: #005bb5;
  }
`;