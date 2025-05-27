import styled from 'styled-components';

export function Filters({ filters, setFilters }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({
      status: '',
      gender: '',
      species: '',
      name: '',
      type: ''
    });
  };

  return (
    <StyledFilter>
      <Select
        name="status"
        area="status"
        onChange={handleInputChange}
        value={filters.status}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        name="gender"
        area="gender"
        onChange={handleInputChange}
        value={filters.gender}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        name="species"
        area="species"
        onChange={handleInputChange}
        value={filters.species}
      >
        <option value="">Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </Select>
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
        <Button apply onClick={() => setFilters((prev) => ({ ...prev }))}>
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

const Select = styled.select`
  grid-area: ${(props) => props.area};
  padding: 12px 12px 12px 16px;
  border-radius: 8px;
  background-color: #001f3f;
  color: #b3b3b3;
  border: 1px solid #83bf46;
  font-size: 14px;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="%23b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M4 6l4 4 4-4"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #83bf46;
  }

  @media (max-width: 530px) {
    width: 240px;
    margin: 0 auto;
  }
`;

const Input = styled.input`
  grid-area: ${(props) => props.area};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #001f3f;
  color: #b3b3b3;
  border: 1px solid #83bf46;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #83bf46;
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
  font-size: 14px;
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
