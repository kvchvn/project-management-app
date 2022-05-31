import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 5px 2rem;
  background: ${({ theme }) => theme.colors.bg.secondary};
  & div {
    display: flex;
  }
  @media ${device.MOBILE} {
    padding: 5px 3px;
    margin-right: 0;
  }
`;
