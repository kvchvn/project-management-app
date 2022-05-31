import styled from 'styled-components';
import { device } from '../../constants/common';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  padding: 30px 100px;
  max-width: 550px;
  border: 3px solid ${({ theme }) => theme.colors.bg.quaternary};
  border-radius: 10px;
  font-size: 18px;

  @media ${device.TABLET} {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    border: none;
    padding: 30px 0;
    align-items: flex-end;
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
  font-size: inherit;

  @media (max-width: 500px) {
    width: 80%;
  }

  input {
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #e9ecef;
    outline: none;
    width: 100%;
    height: 40px;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      opacity: 1;
      transform: translate(calc(-100% - 20px), -50%);

      &:after {
        content: ':';
      }
    }
  }

  label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 0.75em;
    transform-origin: 100% 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    transition: transform 0.2s, color 0.2s;
  }

  span {
    color: darkred;
    display: block;
    position: absolute;
    bottom: -20px;
    font-size: 0.8em;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledButtonSubmit = styled.button`
  margin: 0 auto;
  margin-top: 30px;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  font-size: inherit;
  background-color: ${({ theme }) => theme.colors.bg.quinary};
  border: 2px solid ${({ theme }) => theme.colors.bg.quinary};
  transition: all 0.25s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.bg.quaternary};
  }
`;
