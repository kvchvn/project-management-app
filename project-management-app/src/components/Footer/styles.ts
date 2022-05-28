import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.bg.secondary}};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
  font-size: 12px;
  & a {
    padding-left: 10px;
  }
  &a: hover {
    filter: invert(30%) sepia(100%) saturate(290%) hue-rotate(130deg) brightness(80%) contrast(60%);
  }
  & img {
    height: 30px;
  }
  & img:hover {
    filter: invert(40%) sepia(80%) saturate(290%) hue-rotate(120deg) brightness(80%) contrast(80%);
  }
`;
export const StyledGit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
