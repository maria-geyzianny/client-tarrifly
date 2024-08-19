import React from 'react';
import styled from 'styled-components';
import FormComponent from '../components/Form/FormComponent';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-right: 1.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 1.5rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-right: 6rem;

`;


const Home: React.FC = () => {
  return (
    <Container>
      <Title>New Budget </Title>
      <SubTitle>Application pages</SubTitle>
      <FormComponent />
    </Container>
  );
};

export default Home;
