import { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './Card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  const cardOnClickHandler = useCallback((props) => {
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }, []);

  const handlers = useMemo(() => {
    const map = {};
    characters.forEach((props) => {
      map[props.id] = () => cardOnClickHandler(props);
    });

    return map;
  }, [characters, cardOnClickHandler]);

  if (!characters.length) {
    return null;
  }

  return (
    <>
      <Container>
        {characters.map((props) => (
          <Card key={props.id} onClickHandler={handlers[props.id]} {...props} />
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
