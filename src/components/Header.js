import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import headerImage from '../assets/images/herbs_removebg.png';

const HeaderWrapper = styled.header`
  background-color: #d2dfd2;
  padding: 10px 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  flex-grow: 1; /* Allow the logo and title to take up available space */
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 10px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px; /* Adjust this value to change the space between buttons */
  margin-left: 20px; /* Add margin to create space between search bar and nav */
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px; /* Adjust the padding to move the search bar right */
  margin-right: 20px; /* Space between search bar and navigation */
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 400px;
  border: 2px solid #a7c4a8;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: #7fa881;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NavButton = styled(Link)`
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  background-color: #a7c4a8;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  
  &:hover {
    background-color: #7fa881;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Handle search logic here
  };

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo src={headerImage} alt="Herbs" />
        <Title>Ayurvata</Title>
      </LogoContainer>
      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchBarWrapper>
      <Nav>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/plants">Plants</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/3Dgarden">View 3D Garden</NavButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
