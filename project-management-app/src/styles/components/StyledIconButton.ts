import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledIconButton = styled(StyledButton)`
  position: relative;
  width: 28px;
  height: 28px;
  padding: 0.5em;
  margin: 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background: ${({ theme, variant }) => theme.colors.button[variant].bg};
    }
  }

  svg {
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 0.325em;
    fill: ${({ theme, variant }) => theme.colors.button[variant].font};
  }
`;

export default StyledIconButton;
