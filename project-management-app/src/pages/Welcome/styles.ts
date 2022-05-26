import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  width: 23rem;
  border-radius: 30px;
  border: 2px solid #24c5db;
  backdrop-filter: blur(9px);
  z-index: 1001;
  margin: 0 auto;
  padding: 20px 0px;
  h2 {
    color: orange;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 125px);
  background-image: url(./bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
export const StyledDescription = styled.p`
  padding: 30px 0;
  font-weight: 600;
`;
