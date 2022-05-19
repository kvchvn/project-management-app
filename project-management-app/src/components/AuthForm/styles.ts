import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 400px;
  margin: 0 100px;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  position: relative;
  font-size: 16px;

  input {
    border: none;
    background-color: #e9ecef;
    outline: none;
    width: 100%;
    padding: 0.75em;

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
    color: red;
    position: absolute;
    right: calc(-100% - 5px);
    top: 50%;
    width: 100%;
    transform: translateY(-50%);

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
