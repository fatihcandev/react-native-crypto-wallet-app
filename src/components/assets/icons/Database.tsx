import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgDatabase(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5c0-2.7 5.2-4 10-4s10 1.3 10 4v14c0 2.7-5.2 4-10 4S2 21.7 2 19V5zm10 9c5.5 0 8-1.5 8-2V7.5c-1.9 1-5 1.5-8 1.5s-6.1-.5-8-1.5V12c0 .5 2.5 2 8 2zm0-11c5.2 0 8 1.5 8 2s-2.8 2-8 2-8-1.5-8-2 2.8-2 8-2zM4 19c0 .5 2.5 2 8 2s8-1.5 8-2v-4.5c-1.9 1-5 1.5-8 1.5s-6.1-.5-8-1.5V19z"
        clipRule="evenodd"
      />
      <Mask id="database_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M2 5c0-2.7 5.2-4 10-4s10 1.3 10 4v14c0 2.7-5.2 4-10 4S2 21.7 2 19V5zm10 9c5.5 0 8-1.5 8-2V7.5c-1.9 1-5 1.5-8 1.5s-6.1-.5-8-1.5V12c0 .5 2.5 2 8 2zm0-11c5.2 0 8 1.5 8 2s-2.8 2-8 2-8-1.5-8-2 2.8-2 8-2zM4 19c0 .5 2.5 2 8 2s8-1.5 8-2v-4.5c-1.9 1-5 1.5-8 1.5s-6.1-.5-8-1.5V19z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#database_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgDatabase;
