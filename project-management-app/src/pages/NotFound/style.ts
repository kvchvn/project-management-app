import styled from 'styled-components';
import { device } from '../../constants/common';

export const Styled404 = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 65px);
  background: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  & p {
    padding: 30px 30px;
    font-size: 60px;
  }
  @media ${device.MOBILE} {
    min-height: calc(100vh - 80px);
    p {
      font-size: 20px;
    }
  }
`;
