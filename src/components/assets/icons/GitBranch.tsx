import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGitBranch(props: SvgProps) {
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
        d="M22 6c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.8 1.3 3.4 3 3.8-.4 3.7-3.4 6.7-7.1 7.1-.4-1.4-1.5-2.5-2.8-2.8V3c0-.6-.4-1-1-1S5 2.4 5 3v11.1c-1.7.4-3 2-3 3.9 0 2.2 1.8 4 4 4 1.9 0 3.4-1.3 3.9-3 4.8-.4 8.7-4.3 9.1-9.1 1.7-.5 3-2 3-3.9zM6 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM16 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
        clipRule="evenodd"
      />
      <Mask id="git-branch_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M22 6c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.8 1.3 3.4 3 3.8-.4 3.7-3.4 6.7-7.1 7.1-.4-1.4-1.5-2.5-2.8-2.8V3c0-.6-.4-1-1-1S5 2.4 5 3v11.1c-1.7.4-3 2-3 3.9 0 2.2 1.8 4 4 4 1.9 0 3.4-1.3 3.9-3 4.8-.4 8.7-4.3 9.1-9.1 1.7-.5 3-2 3-3.9zM6 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM16 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#git-branch_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGitBranch;
