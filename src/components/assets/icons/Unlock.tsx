import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUnlock(props: SvgProps) {
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
        d="M8 10h11c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3v-7c0-1.7 1.3-3 3-3h1V7c0-1.6.6-3.1 1.8-4.2C8.9 1.6 10.4 1 12 1c2.8 0 5.3 2 5.9 4.8.1.6-.3 1.1-.8 1.2-.5.1-1.1-.3-1.2-.8-.4-1.9-2-3.2-3.9-3.2-1.1 0-2.1.4-2.8 1.2C8.4 4.9 8 5.9 8 7v3zm11 11c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h14z"
        clipRule="evenodd"
      />
      <Mask id="unlock_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M8 10h11c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3v-7c0-1.7 1.3-3 3-3h1V7c0-1.6.6-3.1 1.8-4.2C8.9 1.6 10.4 1 12 1c2.8 0 5.3 2 5.9 4.8.1.6-.3 1.1-.8 1.2-.5.1-1.1-.3-1.2-.8-.4-1.9-2-3.2-3.9-3.2-1.1 0-2.1.4-2.8 1.2C8.4 4.9 8 5.9 8 7v3zm11 11c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h14z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#unlock_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUnlock;
