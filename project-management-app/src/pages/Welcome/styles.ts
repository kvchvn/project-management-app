import styled from 'styled-components';
import { device } from '../../constants/common';
import { baseTheme } from '../../styles/theme';

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 25rem;
  border-radius: 30px;
  border: 3px solid ${baseTheme.colors.bgNavbar};
  margin: 0 auto;
  padding: 10px 0px;
  @media ${device.mobile} {
    font-size: 12px;
    width: 20rem;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 117px);
  background: ${baseTheme.colors.bgWelcome};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobile} {
    padding: 5px 0;
  }
`;
export const StyledDescription = styled.p`
  padding: 30px 0;
  font-weight: 500;
  @media ${device.mobile} {
    padding: 5px 0;
  }
`;
