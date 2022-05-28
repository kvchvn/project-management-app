import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
<<<<<<< HEAD
  border: 3px solid ${({ theme }) => theme.colors.border.secondary};
  background: ${({ theme }) => theme.colors.bg.secondary};
=======
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
>>>>>>> 01b78f3 (refactor: change colors of background)
  margin: 0 auto;
  padding: 20px 10px;
  @media ${device.MOBILE} {
    font-size: 12px;
    width: 20rem;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 117px);
<<<<<<< HEAD
  background: ${({ theme }) => theme.colors.bg.primary};
=======
  background: ${({ theme }) => theme.colors.bg};
>>>>>>> 01b78f3 (refactor: change colors of background)
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
