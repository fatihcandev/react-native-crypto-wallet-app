import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGitPullRequest(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M6 2C3.8 2 2 3.8 2 6c0 1.9 1.3 3.4 3 3.9V21c0 .6.4 1 1 1s1-.4 1-1V9.9c1.7-.4 3-2 3-3.9 0-2.2-1.8-4-4-4zm13 6v6.1c1.7.5 3 2 3 3.9 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.9 1.3-3.5 3-3.9V8c0-.6-.4-1-1-1h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c1.7 0 3 1.3 3 3zm-3 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM4 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
        clipRule="evenodd"
      />
      <Mask
        id="git-pull-request_svg__a"
        width={20}
        height={20}
        x={2}
        y={2}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6 2C3.8 2 2 3.8 2 6c0 1.9 1.3 3.4 3 3.9V21c0 .6.4 1 1 1s1-.4 1-1V9.9c1.7-.4 3-2 3-3.9 0-2.2-1.8-4-4-4zm13 6v6.1c1.7.5 3 2 3 3.9 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.9 1.3-3.5 3-3.9V8c0-.6-.4-1-1-1h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c1.7 0 3 1.3 3 3zm-3 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM4 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#git-pull-request_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGitPullRequest;
