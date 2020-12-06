import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAlignCenter(props: SvgProps) {
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
        d="M21 5c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18zM6 11h12c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm16 3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1zm-4 3c.6 0 1 .4 1 1s-.4 1-1 1H6c-.6 0-1-.4-1-1s.4-1 1-1h12z"
        clipRule="evenodd"
      />
      <Mask id="align-center_svg__a" width={20} height={14} x={2} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M21 5c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18zM6 11h12c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1zm16 3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1zm-4 3c.6 0 1 .4 1 1s-.4 1-1 1H6c-.6 0-1-.4-1-1s.4-1 1-1h12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#align-center_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAlignCenter;
