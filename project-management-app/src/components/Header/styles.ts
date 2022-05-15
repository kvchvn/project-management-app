import styled from 'styled-components';

export interface StickyDepended {
  sticky: boolean;
}

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${(props: StickyDepended) => (props.sticky ? 'gray' : 'lightgray')};
  transform: ${(props: StickyDepended) => (props.sticky ? 'translateY(-20px)' : 'none')};
  transition: background-color 0.5s, transform 0.5s;
`;

export const HeaderTitle = styled.h1`
  transform: ${(props: StickyDepended) => (props.sticky ? 'scale(0.9)' : 'none')};
  transition: transform 0.5s;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  transform: ${(props: StickyDepended) => (props.sticky ? 'scale(0.9)' : 'none')};
  transition: transform 0.5s;
`;

export const NavButton = styled.button`
  border: 2px solid black;
  background-color: white;
  width: 70px;
  text-align: center;
`;
