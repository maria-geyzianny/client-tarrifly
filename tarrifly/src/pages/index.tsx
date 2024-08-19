import React from 'react';
import styled from 'styled-components';
import FormComponent from '../components/Form/FormComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  margin-right: 1rem;


`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 3rem;
  margin-right: 5.5rem;


  
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
