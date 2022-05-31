import styled from 'styled-components';
import { device } from '../../constants/common';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: calc(100% - 200px);
  max-width: 1400px;

  @media ${device.LAPTOP} {
    width: calc(100% - 100px);
  }

  @media ${device.TABLET} {
    width: calc(100% - 20px);
  }
`;

export default StyledWrapper;
