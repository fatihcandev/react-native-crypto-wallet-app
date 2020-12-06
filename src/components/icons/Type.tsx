import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgType(props: SvgProps) {
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
        d="M21 4v3c0 .6-.4 1-1 1s-1-.4-1-1V5h-6v14h2c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1h2V5H5v2c0 .6-.4 1-1 1s-1-.4-1-1V4c0-.6.4-1 1-1h16c.6 0 1 .4 1 1z"
      />
      <Mask id="type_svg__a" width={18} height={18} x={3} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          d="M21 4v3c0 .6-.4 1-1 1s-1-.4-1-1V5h-6v14h2c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1h2V5H5v2c0 .6-.4 1-1 1s-1-.4-1-1V4c0-.6.4-1 1-1h16c.6 0 1 .4 1 1z"
        />
      </Mask>
      <G mask="url(#type_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgType;
