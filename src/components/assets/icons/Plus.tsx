import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPlus(props: SvgProps) {
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
        d="M20 12c0 .6-.4 1-1 1h-6v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H5c-.6 0-1-.4-1-1s.4-1 1-1h6V5c0-.6.4-1 1-1s1 .4 1 1v6h6c.6 0 1 .4 1 1z"
      />
      <Mask id="plus_svg__a" width={16} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          d="M20 12c0 .6-.4 1-1 1h-6v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H5c-.6 0-1-.4-1-1s.4-1 1-1h6V5c0-.6.4-1 1-1s1 .4 1 1v6h6c.6 0 1 .4 1 1z"
        />
      </Mask>
      <G mask="url(#plus_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPlus;
