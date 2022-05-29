import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 50vw;
  min-width: 280px;
  max-width: 500px;
  height: 40vh;
  max-height: 300px;

  @media ${device.TABLET} {
    width: 70vw;
  }

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    & > span {
      font-size: 0.75em;
      position: absolute;
      bottom: -20px;
      color: darkred;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 0 10px;
  width: 50%;
  height: 40px;
  font-size: 1.1rem;

  @media ${device.LAPTOP} {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;
