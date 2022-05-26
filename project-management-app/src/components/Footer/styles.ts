import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  display: flex;
  background: #48d1cc;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  & a {
    padding-left: 10px;
  }
  &a: hover {
    filter: invert(40%) sepia(100%) saturate(290%) hue-rotate(130deg) brightness(90%) contrast(80%);
  }
  & img {
    height: 50px;
  }
  & img:hover {
    filter: invert(40%) sepia(100%) saturate(290%) hue-rotate(130deg) brightness(90%) contrast(80%);
  }
`;
export const StyledGit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
