import styled from 'styled-components';

export function Filters() {
  return (
    <StyledFilter>
      <Select area="status">
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </Select>
      <Select area="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Select area="species">
        <option value="">Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </Select>
      {/* Вторая строка: Name, Type, Buttons */}
      <Input area="name" type="text" placeholder="Name" />
      <Input area="type" type="text" placeholder="Type" />
      <ButtonContainer>
        <Button apply>Apply</Button>
        <Button>Reset</Button>
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
  padding: 10px;
  border-radius: 5px;
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

const Input = styled.input`
  grid-area: ${(props) => props.area};
  padding: 10px;
  border-radius: 5px;
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
  padding: 10px;
  border-radius: 5px;
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

  @media (max-width: 530px) {
    width: 240px;
  }
`;
