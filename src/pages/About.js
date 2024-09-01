// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/aboutBg.png'; // Ensure this path is correct

const AboutWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: black;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: black;
`;

const About = () => (
  <AboutWrapper>
    <ContentWrapper>
      <SectionTitle>About Us</SectionTitle>
      <SectionText>
        Welcome to Ayurvata, your gateway to exploring the rich world of traditional medicine. Our mission is to bridge the gap between ancient herbal wisdom and modern understanding, providing a comprehensive and interactive platform dedicated to the study and appreciation of medicinal plants used in AYUSH systems (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy).
      </SectionText>
      <SectionText>
        Ayurvata is more than just a virtual garden—it's a vibrant repository of knowledge and resources. We offer detailed insights into a wide array of medicinal plants, presenting their benefits, uses, and cultivation methods in an engaging and accessible manner. Whether you're a student, a practitioner, or simply an enthusiast of herbal medicine, our platform is designed to enrich your understanding and foster a deeper connection with nature.
      </SectionText>
      <SectionText>
        Our approach includes in-depth information on each plant, interactive exploration tools, and community engagement to enhance your experience. Explore our virtual garden, learn about traditional and modern applications, and connect with like-minded individuals passionate about herbal medicine.
      </SectionText>
      <SectionText>
        Ayurvata was born out of a passion for traditional medicine and a desire to make this ancient knowledge accessible to a modern audience. Our team comprises experts in herbal medicine, digital technology, and education, all working together to create a platform that celebrates and preserves the rich heritage of AYUSH.
      </SectionText>
      <SectionText>
        Join us in exploring the wonders of AYUSH and become part of a community dedicated to the study and appreciation of medicinal plants.
      </SectionText>
      <SectionText>
      Thank you for visiting Ayurvata. We hope you find inspiration and knowledge in our virtual herbal garden.
      </SectionText>
    </ContentWrapper>
  </AboutWrapper>
);

export default About;
