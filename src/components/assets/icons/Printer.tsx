import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPrinter(props: SvgProps) {
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
        d="M19 8h1c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-1v3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3H4c-1.7 0-3-1.3-3-3v-5c0-1.7 1.3-3 3-3h1V2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v6zm-2-5H7v5h10V3zm0 18H7v-6h10v6zm3-4c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v3h1z"
        clipRule="evenodd"
      />
      <Mask id="printer_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19 8h1c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3h-1v3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3H4c-1.7 0-3-1.3-3-3v-5c0-1.7 1.3-3 3-3h1V2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v6zm-2-5H7v5h10V3zm0 18H7v-6h10v6zm3-4c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v3h1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#printer_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPrinter;
