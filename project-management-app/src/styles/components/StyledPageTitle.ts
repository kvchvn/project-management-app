import styled from 'styled-components';

const StyledPageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.title};
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export default StyledPageTitle;
