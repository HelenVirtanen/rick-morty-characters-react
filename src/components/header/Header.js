import styled from 'styled-components';
import { Logo } from './Logo';
import { Filters } from './Filter';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Filters />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 152px;
  @media (max-width: 1440px) {
    padding: 0;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
  }
`;
