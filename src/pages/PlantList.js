import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plantData from '../Data/plantData'; // Adjust path as needed

const PlantListWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlantCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const PlantImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PlantDetails = styled.div`
  padding: 15px;
`;

const PlantName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const PlantDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  color: #fff;
  background-color: green;
  text-decoration: none;
  border-radius: 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b3d1a;
  }
`;

const PlantList = () => {
  return (
    <PlantListWrapper>
      {plantData.map((plant) => (
        <PlantCard key={plant.id}>
          <PlantImage src={plant.image} alt={plant.name} />
          <PlantDetails>
            <PlantName>{plant.name}</PlantName>
            <PlantDescription>{plant.description}</PlantDescription>
            <ExploreButton to={`/plants/${plant.id}`}>
              View Details
            </ExploreButton>
          </PlantDetails>
        </PlantCard>
      ))}
    </PlantListWrapper>
  );
};

export default PlantList;
