import React from 'react';
import { StyledFooter, StyledFooterWrapper, StyledGit } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <div>
          <a target="_blank" href="https://rs.school/" rel="noreferrer">
            <img src="./rs_school_js.svg" alt="rs-school"></img>
          </a>
        </div>
        <h4>2022</h4>
        <StyledGit>
          <img src="./git.svg" alt="git"></img>
          <div>
            <a target="_blank" href="https://github.com/kvchvn" rel="noreferrer">
              Anton Kachan
            </a>
            <a target="_blank" href="https://github.com/evitla" rel="noreferrer">
              Dinmukhamed Sailaubek
            </a>
            <a target="_blank" href="https://github.com/DilbarAkkaya" rel="noreferrer">
              Dilbar Akkaya
            </a>
          </div>
        </StyledGit>
      </StyledFooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
