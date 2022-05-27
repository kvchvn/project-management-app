import React from 'react';
import { StyledFooterWrapper, StyledGit } from './styles';

function Footer() {
  return (
    <StyledFooterWrapper>
      <div>
        <a target="_blank" href="https://rs.school/" rel="noreferrer">
          <img src="./rs_school_js.svg" alt="rs-school"></img>
          The Roling Scope School
        </a>
      </div>
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
      <div>@2022</div>
    </StyledFooterWrapper>
  );
}

export default Footer;
