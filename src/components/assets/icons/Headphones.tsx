import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgHeadphones(props: SvgProps) {
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
        d="M12 2C6.5 2 2 6.5 2 12v7c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-3c0-1.7-1.3-3-3-3H4v-1c0-4.4 3.6-8 8-8s8 3.6 8 8v1h-2c-1.7 0-3 1.3-3 3v3c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-7c0-5.5-4.5-10-10-10zM6 15c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-4h2zm13 5c.6 0 1-.4 1-1v-4h-2c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h1z"
        clipRule="evenodd"
      />
      <Mask id="headphones_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2C6.5 2 2 6.5 2 12v7c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-3c0-1.7-1.3-3-3-3H4v-1c0-4.4 3.6-8 8-8s8 3.6 8 8v1h-2c-1.7 0-3 1.3-3 3v3c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-7c0-5.5-4.5-10-10-10zM6 15c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-4h2zm13 5c.6 0 1-.4 1-1v-4h-2c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#headphones_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgHeadphones;
