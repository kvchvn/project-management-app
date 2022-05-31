import styled from 'styled-components';
import StyledButton from '../../styles/components/StyledButton';

export const StyledContainer = styled.div`
  height: fit-content;
`;

export const StyledColumnCreator = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  input {
    padding: 0.25em;
  }
`;

export const StyledColumnCreateButton = styled(StyledButton)`
  width: 270px;
  min-width: 270px;
`;
