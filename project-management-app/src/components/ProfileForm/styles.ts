import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  width: 90vw;
  max-width: 500px;
`;

export const StyledForm = styled.form`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 10px;
  font-size: 18px;

  @media ${device.TABLET} {
    padding: 20px;
  }

  @media (max-width: 500px) {
    padding: 10px;
    font-size: 16px;
  }

  & > h4 {
    letter-spacing: 1px;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 500px) {
    padding: 0;
  }

  & > input {
    padding: 0 10px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 5px;
    font-size: inherit;

    &[type='password'] {
      font-size: 2em;
    }
  }

  & > span {
    position: absolute;
    color: darkred;
    bottom: -20px;
    font-size: 0.75em;
  }
`;

export const StyledButton = styled.button`
  margin-right: 10px;
  display: inline-block;
  width: 150px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
  }

  & ~ span {
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.bg.tertiary};
  }
`;

export const StyledDangerBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  border: 2px solid darkred;
  border-radius: 10px;
  font-size: 18px;

  @media ${device.TABLET} {
    padding: 20px;
  }

  @media (max-width: 500px) {
    padding: 10px;
    font-size: 16px;
  }

  & span {
    display: block;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const StyledButtonDelete = styled(StyledButton)`
  background-color: #8b000050;
  border: 2px solid darkred;

  &:hover {
    background-color: #8b0000a6;
  }
`;
