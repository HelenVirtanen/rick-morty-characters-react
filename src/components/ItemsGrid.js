import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './Card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid({ filters }) {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function cardOnClickHandler(props) {
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }

  const filteredCharacters = characters.filter((character) => {
    return (
      (!filters.status || character.status.toLowerCase() === filters.status) &&
      (!filters.gender || character.gender.toLowerCase() === filters.gender) &&
      (!filters.species ||
        character.species.toLowerCase() === filters.species) &&
      (!filters.name ||
        character.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.type ||
        character.type.toLowerCase().includes(filters.type.toLowerCase()))
    );
  });

  if (!characters.length) {
    return null;
  }

  return (
    <>
      <Container>
        {filteredCharacters.map((props) => (
          <Card
            key={props.id}
            onClickHandler={() => cardOnClickHandler(props)}
            {...props}
          />
        ))}

        <Popup settings={popupSettings} setSettings={setPopupSettings} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
