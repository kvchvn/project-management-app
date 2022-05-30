import styled, { keyframes } from 'styled-components';
import { device } from '../../constants/common';
import StyledWrapper from '../../styles/components/StyledWrapper';

const spring = keyframes`
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: none;
  }
`;

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.border.secondary};
  background: ${({ theme }) => theme.colors.bg.secondary};
  margin: 0 auto;
  padding: 20px;
  width: 20rem;
  margin-top: 5em;
  transition: all 0.25s;
  cursor: default;

  &:hover {
    animation: ${spring} 0.4s 0.25s 6 alternate-reverse;
    background-color: ${({ theme }) => theme.colors.bg.quinary + 'a6'};
  }

  @media ${device.MOBILE} {
    font-size: 12px;
  }
`;

export const StyledWelcomeWrapper = styled(StyledWrapper)`
  max-width: 100%;
  min-height: calc(100vh - 120px);
  background: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;

  & h2 {
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.fontFamily.title};
  }

  @media ${device.MOBILE} {
    padding: 5px 0;
  }
`;

export const StyledDescription = styled.p`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  line-height: 1.3em;

  & strong {
    display: block;
    letter-spacing: 0.5px;
  }

  @media ${device.TABLET} {
    padding: 5px 0;
    font-size: 16px;
  }
`;
