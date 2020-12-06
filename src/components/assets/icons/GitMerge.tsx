import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGitMerge(props: SvgProps) {
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
        d="M18 14c-1.8 0-3.4 1.3-3.8 3-3.7-.4-6.7-3.4-7.1-7.1 1.7-.5 3-2 3-3.8 0-2.2-1.8-4-4-4S2 3.8 2 6c0 1.9 1.3 3.4 3 3.9V21c0 .6.4 1 1 1s1-.4 1-1v-6c1.7 2.2 4.2 3.7 7.1 4 .4 1.7 2 3.1 3.9 3.1 2.2 0 4-1.8 4-4S20.2 14 18 14zM4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
        clipRule="evenodd"
      />
      <Mask id="git-merge_svg__a" width={20} height={21} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18 14c-1.8 0-3.4 1.3-3.8 3-3.7-.4-6.7-3.4-7.1-7.1 1.7-.5 3-2 3-3.8 0-2.2-1.8-4-4-4S2 3.8 2 6c0 1.9 1.3 3.4 3 3.9V21c0 .6.4 1 1 1s1-.4 1-1v-6c1.7 2.2 4.2 3.7 7.1 4 .4 1.7 2 3.1 3.9 3.1 2.2 0 4-1.8 4-4S20.2 14 18 14zM4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#git-merge_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGitMerge;
