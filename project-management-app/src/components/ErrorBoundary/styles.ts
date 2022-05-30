import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledError = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colors.border.error};
  background: ${({ theme }) => theme.colors.bg.primary};
  margin: 0 auto;
  margin-top: 2em;
  padding: 20px 10px;
  max-width: 30rem;
  & h2 {
    padding: 1em 1.75em;
  }
  @media ${device.MOBILE} {
    font-size: 12px;
  }
`;
