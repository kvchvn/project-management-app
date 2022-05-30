import styled from 'styled-components';

const StyledPageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.title};
  letter-spacing: 1px;
  margin: 20px 0;
`;

export default StyledPageTitle;
