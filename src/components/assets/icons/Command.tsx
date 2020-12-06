import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCommand(props: SvgProps) {
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
        d="M16 14h2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4v-2h-4v2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4h2v-4H6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4v2h4V6c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4h-2v4zm2-10c-1.1 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2s-.9-2-2-2zM8 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2zM6 8h2V6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2zm8 6h-4v-4h4v4zm2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2h-2v2z"
        clipRule="evenodd"
      />
      <Mask id="command_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M16 14h2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4v-2h-4v2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4h2v-4H6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4v2h4V6c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4h-2v4zm2-10c-1.1 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2s-.9-2-2-2zM8 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2zM6 8h2V6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2zm8 6h-4v-4h4v4zm2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2h-2v2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#command_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCommand;
