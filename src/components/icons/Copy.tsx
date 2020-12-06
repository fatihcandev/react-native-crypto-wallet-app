import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCopy(props: SvgProps) {
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
        d="M5 16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v1c0 .6.4 1 1 1s1-.4 1-1V4c0-1.7-1.3-3-3-3H4C2.3 1 1 2.3 1 4v9c0 1.7 1.3 3 3 3h1zm15-8h-9c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3zm1 12c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z"
        clipRule="evenodd"
      />
      <Mask id="copy_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v1c0 .6.4 1 1 1s1-.4 1-1V4c0-1.7-1.3-3-3-3H4C2.3 1 1 2.3 1 4v9c0 1.7 1.3 3 3 3h1zm15-8h-9c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3zm1 12c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#copy_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCopy;
