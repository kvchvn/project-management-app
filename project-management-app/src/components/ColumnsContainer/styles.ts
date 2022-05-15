import styled from 'styled-components';

export const StyledColumnsContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const StyledColumnCreateButtonContainer = styled.div<{ order: number }>`
  order: ${({ order }) => order};
`;
