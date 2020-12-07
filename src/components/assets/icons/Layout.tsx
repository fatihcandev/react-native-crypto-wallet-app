import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLayout(props: SvgProps) {
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
        d="M5 2h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm14 2H5c-.6 0-1 .4-1 1v3h16V5c0-.6-.4-1-1-1zM4 19v-9h4v10H5c-.6 0-1-.4-1-1zm6 1h9c.6 0 1-.4 1-1v-9H10v10z"
        clipRule="evenodd"
      />
      <Mask id="layout_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 2h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm14 2H5c-.6 0-1 .4-1 1v3h16V5c0-.6-.4-1-1-1zM4 19v-9h4v10H5c-.6 0-1-.4-1-1zm6 1h9c.6 0 1-.4 1-1v-9H10v10z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#layout_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLayout;
