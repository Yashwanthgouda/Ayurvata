// src/components/PlantCard.js
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  max-width: 300px;
`;

const PlantImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PlantDetails = styled.div`
  padding: 15px;
`;

const PlantTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const PlantText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const PlantCard = ({ plant }) => (
  <CardWrapper>
    <PlantImage src={plant.image} alt={plant.commonName} />
    <PlantDetails>
      <PlantTitle>{plant.commonName}</PlantTitle>
      <PlantText><strong>Scientific Name:</strong> {plant.scientificName}</PlantText>
      <PlantText><strong>Description:</strong> {plant.description}</PlantText>
      <PlantText><strong>Uses:</strong> {plant.uses}</PlantText>
      <PlantText><strong>Benefits:</strong> {plant.benefits}</PlantText>
    </PlantDetails>
  </CardWrapper>
);

export default PlantCard;
