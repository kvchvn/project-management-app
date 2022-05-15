import styled from 'styled-components';

export const StyledColumn = styled.div<{ order: number }>`
  position: relative;
  width: 200px;
  height: 200px;
  padding: 5px;
  border: 1px solid black;
  /* order: ${({ order }) => order}; */
  cursor: pointer;
`;
