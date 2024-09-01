import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #343a40;
  padding: 20px;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
`;

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundTitle>404</NotFoundTitle>
    <NotFoundText>Sorry, the page you are looking for does not exist.</NotFoundText>
  </NotFoundWrapper>
);

export default NotFound;
