// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Ayurvata. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
