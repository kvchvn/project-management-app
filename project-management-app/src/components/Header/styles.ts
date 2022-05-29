import styled from 'styled-components';
import { device } from '../../constants/common';
import StyledWrapper from '../../styles/components/StyledWrapper';
import { Theme } from '../../interfaces/common';

export interface StickyDepended {
  sticky: boolean;
  theme: Theme;
}

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ sticky, theme }: StickyDepended) =>
    sticky ? theme.colors.bg.quaternary : theme.colors.bg.secondary};
  font-size: 16px;
  transition: all 0.5s;

  @media ${device.TABLET} {
    padding: ${({ sticky }) => (sticky ? '0' : '10px')} 0;
    font-size: 18px;
  }
`;

export const StyledHeaderWrapper = styled(StyledWrapper)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media ${device.TABLET} {
    flex-direction: row;
    justify-content: space-between;
  }

  & > section {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media ${device.TABLET} {
      position: absolute;
      display: none;
    }
  }
`;

export const StyledHeaderTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title};
  letter-spacing: 1px;
  font-size: ${({ sticky }: StickyDepended) => (sticky ? '0' : '32px')};
  cursor: default;
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.5s;

  @media ${device.TABLET} {
    font-size: ${({ sticky }: StickyDepended) => (sticky ? '0' : '42px')};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  color: ${({ sticky, theme }: StickyDepended) =>
    sticky ? theme.colors.fontHover : theme.colors.font};
  transition: transform 0.5s;

  @media ${device.TABLET} {
    flex-direction: column;
    align-items: flex-start;
    color: ${({ theme }) => theme.colors.font};

    & > button {
      padding: 0;
    }

    &:last-child {
      background-color: lightblue;
    }
  }
`;

export const StyledAside = styled.aside`
  display: flex;
  gap: 20px;

  @media ${device.TABLET} {
    padding: 10px 0;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 10px;
    background-color: lightgray;
  }
`;

export const StyledNavButton = styled.button`
  padding: ${({ sticky }: StickyDepended) => (sticky ? '0' : '5px 10px')};
  text-align: center;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  color: inherit;
  transition: all 0.25s;

  &:hover {
    border-bottom: ${({ sticky }: StickyDepended) =>
      sticky ? '2px solid transparent' : '2px solid black'};
    color: ${({ sticky }: StickyDepended) => (sticky ? 'inherit' : 'black')};
  }

  @media ${device.TABLET} {
    margin-left: 15px;
    padding-left: 0;
    border: none;

    &:hover {
      border: none;
    }
  }
`;

export const StyledProfileButton = styled(StyledNavButton)`
  display: flex;
  gap: 5px;
  align-items: center;

  & > p {
    color: ${({ sticky, theme }: StickyDepended) =>
      sticky ? theme.colors.fontHover : theme.colors.font};
  }

  @media ${device.TABLET} {
    margin-left: 15px;
    justify-content: flex-start;

    & > p {
      color: ${({ theme }) => theme.colors.font};
    }
  }
`;

export const StyledUserImage = styled.img`
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: black;
`;

export const StyledToggler = styled.label.attrs({
  htmlFor: 'toggler',
})`
  display: none;
  width: ${({ sticky }: StickyDepended) => (sticky ? '40px' : '50px')};
  height: ${({ sticky }: StickyDepended) => (sticky ? '40px' : '50px')};
  background-color: black;
  transition: all 0.5s;

  @media ${device.TABLET} {
    display: block;
  }
`;

export const StyledHiddenInput = styled.input.attrs({
  id: 'toggler',
  type: 'checkbox',
})`
  display: none;

  @media ${device.TABLET} {
    &:checked ~ section {
      padding: 20px 0;
      display: flex;
      flex-direction: column-reverse;
      gap: 30px;
      bottom: -300px;
      right: 0;
      width: 180px;
      border: 3px solid ${({ theme }) => theme.colors.border.primary};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      z-index: 1000;
    }
  }
