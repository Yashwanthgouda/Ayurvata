import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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
  const { id } = useParams(); // Get the plant ID from the URL
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        // Adjust the API endpoint URL if necessary
        const response = await axios.get(`http://localhost:5000/plants/${id}`);
        setPlant(response.data);
      } catch (err) {
        console.error('Error fetching plant details:', err); // Log the error details
        setError('Error fetching plant details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlant(); // Fetch plant details on component mount
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!plant) return <p>Plant not found!</p>;

  return (
    <PlantDetailWrapper>
      <PlantImage src={plant.image || '/default-image.jpg'} alt={plant.name} /> {/* Default image if not available */}
      <h2>{plant.name}</h2>
      <h3>Benefits</h3>
      <p>{plant.benefits}</p>
      <h3>Scientific Classification</h3>
      <pre>{JSON.stringify(plant.scientificClassification, null, 2)}</pre>
      <h3>Common Names</h3>
      <pre>{JSON.stringify(plant.commonNames, null, 2)}</pre>
      <h3>Geographical Distribution</h3>
      <pre>{JSON.stringify(plant.geographicalDistribution, null, 2)}</pre>
      <h3>Botanical Description</h3>
      <pre>{JSON.stringify(plant.botanicalDescription, null, 2)}</pre>
      <h3>Phytochemical Constituents</h3>
      <pre>{JSON.stringify(plant.phytochemicalConstituents, null, 2)}</pre>
      <h3>Traditional and Modern Uses</h3>
      <pre>{JSON.stringify(plant.traditionalAndModernUses, null, 2)}</pre>
      <h3>Cultural and Historical Significance</h3>
      <pre>{JSON.stringify(plant.culturalAndHistoricalSignificance, null, 2)}</pre>
      <h3>Potential Side Effects and Contraindications</h3>
      <pre>{JSON.stringify(plant.potentialSideEffectsAndContraindications, null, 2)}</pre>
      <h3>Conservation Status</h3>
      <pre>{JSON.stringify(plant.conservationStatus, null, 2)}</pre>
      <h3>Cultivation</h3>
      <pre>{JSON.stringify(plant.cultivation, null, 2)}</pre>
    </PlantDetailWrapper>
  );
};

export default PlantDetail;
