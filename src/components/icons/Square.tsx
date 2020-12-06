import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSquare(props: SvgProps) {
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
        d="M5 2h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm14 18c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14z"
        clipRule="evenodd"
      />
      <Mask id="square_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 2h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm14 18c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#square_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSquare;
