import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 5px 2rem;
  background:  ${({ theme }) => theme.colors.bg.secondary};
  @media ${device.MOBILE} {
    padding: 5px 3px;
    margin-right: 0;
  }
`;
