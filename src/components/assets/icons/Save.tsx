import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSave(props: SvgProps) {
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
        d="M21.7 7.3l-5-5c-.2-.2-.4-.3-.7-.3H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-.3-.1-.5-.3-.7zM16 20H8v-6h8v6zm3 0c.6 0 1-.4 1-1V8.4L15.6 4H8v3h7c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1V4H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h1v-7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v7h1z"
        clipRule="evenodd"
      />
      <Mask id="save_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M21.7 7.3l-5-5c-.2-.2-.4-.3-.7-.3H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-.3-.1-.5-.3-.7zM16 20H8v-6h8v6zm3 0c.6 0 1-.4 1-1V8.4L15.6 4H8v3h7c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1V4H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h1v-7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v7h1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#save_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSave;
