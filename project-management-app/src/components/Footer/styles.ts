import styled from 'styled-components';
import { device } from '../../constants/common';
import StyledWrapper from '../../styles/components/StyledWrapper';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.bg.secondary};
`;

export const StyledFooterWrapper = styled(StyledWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;

  @media (max-width: 450px) {
    justify-content: center;
    gap: 30px;
  }

  & a {
    padding-left: 10px;
    color: inherit;
  }

  & a:hover {
    color: black;
  }

  & img {
    height: 30px;
  }

  & img:hover {
    filter: invert(40%) sepia(80%) saturate(290%) hue-rotate(120deg) brightness(80%) contrast(80%);
  }

  & > h4 {
    font-size: 2em;
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.fontFamily.title};

    @media ${device.LAPTOP} {
      font-size: 1.4em;
    }
  }
`;

export const StyledGit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    &:hover {
      filter: none;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media ${device.TABLET} {
      gap: 10px;
    }
  }
`;
