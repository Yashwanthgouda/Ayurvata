// src/pages/PlantDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PlantDetail = () => {
  const { id } = useParams();
  
  // Placeholder for plant details
  return (
    <div>
      <h2>Plant Detail for ID: {id}</h2>
      <p>Details about the plant will be displayed here.</p>
    </div>
  );
};

export default PlantDetail;
