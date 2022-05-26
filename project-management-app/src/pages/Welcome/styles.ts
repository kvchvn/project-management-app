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
  border: 2px solid #24C5DB;
  background-color: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);
  backdrop-filter: blur(5px);
  z-index: 1001;
  margin: 0 auto;
  padding: 20px 0px;
`;
export const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 150px);
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
  font-weight: 500;
`;
