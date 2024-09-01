import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import plantData from '../Data/plantData'; // Adjust path as needed

const PlantDetailWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const PlantImage = styled.img`
  width: 300px;
  height: auto;
  margin: 20px 0;
`;

const PlantDetail = () => {
  const { id } = useParams();
  const plant = plantData.find((p) => p.id === id);

  if (!plant) return <p>Plant not found!</p>;

  return (
    <PlantDetailWrapper>
      <PlantImage src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>{plant.description}</p>
    </PlantDetailWrapper>
  );
};

export default PlantDetail;
