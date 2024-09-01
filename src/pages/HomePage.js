import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background3.png'; // First Background Image
import backgroundImage1 from '../assets/images/background1.png'; // Second Background Image

const HomePageWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 100%;
`;

const TopSection = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  color: white;
  min-height: 100vh; /* Ensure the section takes the full height of the viewport */
`;

const BottomSection = styled.div`
  background-image: url(${backgroundImage1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  color: white;
  min-height: 100vh; /* Ensure the section takes the full height of the viewport */
`;

const ContentContainer = styled.div`
  width: 60%;
  max-width: 800px;
  margin: 0;
  margin-left: auto; /* Pushes container to the right end */
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the right */
  justify-content: center; /* Center content vertically */
`;

// Centered heading style
const CenteredHeading = styled.h2`
  text-align: center;
  width: 100%;
  margin: 0;
`;

const WelcomeTitle = styled(CenteredHeading)`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const WelcomeText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`;

const SectionTitle = styled(CenteredHeading)`
  font-size: 2rem;
  color: white;
  margin-top: 30px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ExploreButton = styled.a`
  display: inline-block;
  margin: 10px;
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

const HomePage = () => {
  return (
    <HomePageWrapper>
      <TopSection>
        <ContentContainer>
          <WelcomeTitle>Welcome to Ayurvata: Your Virtual Herbal Garden</WelcomeTitle>
          <WelcomeText>
            Discover the Wonders of AYUSH!!! <br></br>
            Ayurvata, an immersive and interactive virtual herbal garden dedicated to showcasing the diverse range of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). Our platform offers a rich repository of knowledge about traditional medicine, bringing the power of nature and centuries-old wisdom right to your fingertips.
          </WelcomeText>
          <SectionTitle>What is AYUSH?</SectionTitle>
          <SectionText>
            AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy, the traditional systems of medicine recognized and promoted by the Government of India. Each system brings its unique approach to health and wellness, rooted in natural remedies and holistic practices.
          </SectionText>
          <FeatureList>
            <FeatureItem><strong>Ayurveda:</strong> An ancient system of medicine focusing on balance and harmony within the body through diet, herbal treatments, and lifestyle adjustments.</FeatureItem>
            <FeatureItem><strong>Yoga & Naturopathy:</strong> Emphasizes self-healing through natural remedies, physical postures, and holistic health practices.</FeatureItem>
            <FeatureItem><strong>Unani:</strong> A traditional system of medicine that integrates herbal remedies and lifestyle practices for maintaining health and treating diseases.</FeatureItem>
            <FeatureItem><strong>Siddha:</strong> A South Indian tradition of medicine using herbs, minerals, and other natural substances to restore balance and health.</FeatureItem>
            <FeatureItem><strong>Homeopathy:</strong> A system of medicine based on the principle of "like cures like," using highly diluted substances to stimulate the body’s healing processes.</FeatureItem>
          </FeatureList>
        </ContentContainer>
      </TopSection>
      <BottomSection>
        <ContentContainer>
          <SectionTitle>Explore Our Herbal Garden</SectionTitle>
          <SectionText>
            Dive into our virtual garden and explore a curated collection of medicinal plants categorized under AYUSH systems. Our interactive platform provides detailed information on each plant, including:
          </SectionText>
          <FeatureList>
            <FeatureItem><strong>Scientific Name and Classification:</strong> Discover the botanical details and taxonomy of each plant.</FeatureItem>
            <FeatureItem><strong>Traditional Uses:</strong> Learn about historical and traditional applications in various AYUSH systems.</FeatureItem>
            <FeatureItem><strong>Health Benefits:</strong> Find out how these plants contribute to wellness and healing.</FeatureItem>
            <FeatureItem><strong>Cultivation and Harvesting:</strong> Get insights into where and how these plants grow, and how they are harvested.</FeatureItem>
          </FeatureList>
          <ButtonContainer>
            <ExploreButton href="/plants">Explore the Garden</ExploreButton>
            <ExploreButton href="/about">Learn More About AYUSH</ExploreButton>
          </ButtonContainer>
        </ContentContainer>
      </BottomSection>
    </HomePageWrapper>
  );
};

export default HomePage;
