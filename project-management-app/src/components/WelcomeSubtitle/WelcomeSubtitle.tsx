import React from 'react';
type SubtitleProps = {
  children: string;
};

function WelcomeSubtitle(props: SubtitleProps) {
  return <h2>{props.children}</h2>;
}

export default WelcomeSubtitle;
