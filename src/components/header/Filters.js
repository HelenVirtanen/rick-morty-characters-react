import styled from 'styled-components';
import { useData } from '../providers';
import { useState, useCallback } from 'react';
import { CustomSelect } from './CustomSelect';

export function Filters() {
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
    name: '',
    type: ''
  });
  const { apiURL, setApiURL } = useData();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFilter = useCallback(() => {
    const urlWithFilters = new URL(apiURL);
    const filterParams = Object.entries(filters);

    filterParams.forEach(([key, value]) => {
      value && urlWithFilters.searchParams.set(key, value);
    });

    if (urlWithFilters.searchParams.size > 0) {
      setApiURL(urlWithFilters);
    }
  }, [apiURL, filters, setApiURL]);

  const handleReset = useCallback(() => {
    const urlFull = new URL(apiURL);

    const baseUrl = urlFull.origin + urlFull.pathname;
    setFilters(() => ({
      status: '',
      gender: '',
      species: '',
      name: '',
      type: ''
    }));

    setApiURL(baseUrl);
  }, [apiURL, setApiURL]);

  return (
    <StyledFilter>
      <CustomSelect
        name="status"
        area="status"
        onChange={handleInputChange}
        value={filters.status}
        options={[
          { value: '', label: 'Status' },
          { value: 'alive', label: 'Alive' },
          { value: 'dead', label: 'Dead' },
          { value: 'unknown', label: 'Unknown' }
        ]}
      />
      <CustomSelect
        name="gender"
        area="gender"
        onChange={handleInputChange}
        value={filters.gender}
        options={[
          { value: '', label: 'Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' }
        ]}
      />
      <CustomSelect
        name="species"
        area="species"
        onChange={handleInputChange}
        value={filters.species}
        options={[
          { value: '', label: 'Species' },
          { value: 'human', label: 'Human' },
          { value: 'alien', label: 'Alien' },
          { value: 'humanoid', label: 'Humanoid' },
          { value: 'poopybutthole', label: 'Poopybutthole' },
          { value: 'mythological creature', label: 'Mythological Creature' },
          { value: 'animal', label: 'Animal' },
          { value: 'robot', label: 'Robot' },
          { value: 'cronenberg', label: 'Cronenberg' },
          { value: 'disease', label: 'Disease' },
          { value: 'unknown', label: 'Unknown' }
        ]}
      />
      <Input
        name="name"
        area="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
        value={filters.name}
      />
      <Input
        name="type"
        area="type"
        type="text"
        placeholder="Type"
        onChange={handleInputChange}
        value={filters.type}
      />
      <ButtonContainer>
        <Button apply onClick={handleFilter}>
          Apply
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  max-width: 600px;
  color: #b3b3b3;
  padding: 27px 0;
  display: grid;
  grid-template-areas:
    'status gender species'
    'name type buttons';
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: auto auto;
  gap: 10px;
  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 150px);
  }
  @media (max-width: 530px) {
    grid-template-areas:
      'status'
      'gender'
      'species'
      'name'
      'type'
      'buttons';
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Input = styled.input`
  grid-area: ${(props) => props.area};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #001f3f;
  color: #b3b3b3;
  border: 1px solid #83bf46;
  font-size: 16px;
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
    border-color: #83bf46;
  }

  &:active,
  &:hover {
    background-color: #334466;
  }

  @media (max-width: 530px) {
    width: 240px;
    margin: 0 auto;
  }
`;

const ButtonContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 12px 21px;
  border-radius: 8px;
  font-size: 16px;
  color: ${(props) => (props.apply ? '#83bf46' : '#ff5152')};
  background-color: transparent;
  border: 1px solid ${(props) => (props.apply ? '#83bf46' : '#ff5152')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.apply ? '#83bf46' : '#ff5152')};
    color: #f5f5f5;
  }

  @media (max-width: 950px) {
    padding: 12px 13px;
  }

  @media (max-width: 530px) {
    width: 240px;
  }
`;
