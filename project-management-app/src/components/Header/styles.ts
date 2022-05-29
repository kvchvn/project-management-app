import styled from 'styled-components';
import { device } from '../../constants/common';
import StyledWrapper from '../../styles/components/StyledWrapper';

export interface StickyDepended {
  sticky: boolean;
}

export interface UserImage {
  src: string;
}

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ sticky, theme }) =>
    sticky ? theme.colors.bg.quaternary : theme.colors.bg.secondary};
  font-size: 16px;
  transform: ${(props: StickyDepended) => (props.sticky ? 'translateY(-20px)' : 'none')};
  transition: background-color 0.5s, transform 0.5s;

  @media ${device.LAPTOP} {
    height: 70px;
  }
`;

export const StyledHeaderWrapper = styled(StyledWrapper)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media ${device.TABLET} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  & > section {
    display: flex;
    justify-content: space-between;

    @media ${device.TABLET} {
      position: absolute;
      display: none;
    }
  }
`;

export const StyledHeaderTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title};
  letter-spacing: 1px;
  font-size: 32px;
  cursor: default;
  transform: ${(props: StickyDepended) => (props.sticky ? 'scale(0.9)' : 'none')};
  transition: transform 0.5s;

  @media ${device.TABLET} {
    font-size: 42px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  transform: ${(props: StickyDepended) => (props.sticky ? 'scale(0.9)' : 'none')};
  transition: transform 0.5s;

  @media ${device.TABLET} {
    flex-direction: column;
    align-items: flex-start;

    &:last-child {
      background-color: lightblue;
    }
  }
`;

export const StyledAside = styled.aside`
  display: flex;

  @media ${device.TABLET} {
    padding: 5px 0;
    flex-direction: column-reverse;
    align-items: flex-start;
    background-color: lightgray;
  }
`;

export const StyledNavButton = styled.button`
  padding: 0 10px;
  text-align: center;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.25s;

  &:hover {
    border-bottom: 2px solid black;
    color: black;
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
  margin-left: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
  padding-left: 0;

  @media ${device.TABLET} {
    justify-content: flex-start;
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
  for: 'toggler',
})`
  display: none;
  width: 50px;
  height: 50px;
  background-color: black;

  @media ${device.TABLET} {
    display: block;
  }
`;

export const StyledHiddenInput = styled.input.attrs({
  id: 'toggler',
  type: 'checkbox',
})`
  display: none;

  &:checked ~ section {
    padding: 20px 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
    bottom: -260px;
    right: 0;
    width: 140px;
    border: 3px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    z-index: 1000;
  }
`;
