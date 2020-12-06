import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMinus(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path fill="#000" d="M20 12c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1z" />
      <Mask id="minus_svg__a" width={16} height={2} x={4} y={11} maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M20 12c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1z" />
      </Mask>
      <G mask="url(#minus_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMinus;
