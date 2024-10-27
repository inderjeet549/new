import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  margin: 20px 0;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover{
  border-color: black;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  }
`;

function SearchBar({ setSearchQuery }) {
  return (
    <Input
      type="text"
      placeholder="Search by name or location"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
