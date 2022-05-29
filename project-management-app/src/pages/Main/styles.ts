import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, auto);
  }

  @media ${device.LAPTOP} {
    grid-template-columns: repeat(4, auto);
  }

  @media ${device.TABLET} {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, auto);
  }
`;
