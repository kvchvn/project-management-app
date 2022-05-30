import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colors.border.secondary};
  background: ${({ theme }) => theme.colors.bg.secondary};
  margin: 0 auto;
  padding: 20px 10px;
  width: 20rem;
  @media ${device.MOBILE} {
    font-size: 12px;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 120px);
  background: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media ${device.MOBILE} {
    padding: 5px 0;
  }
`;
export const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  &span {
    display: block;
  }
  @media ${device.MOBILE} {
    padding: 5px 0;
  }
`;
