import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMaximize(props: SvgProps) {
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
        d="M5 2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-1.7 1.3-3 3-3zm3 20c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 1.7 1.3 3 3 3h3zm13-7c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3-1.3 3-3v-3c0-.6-.4-1-1-1zM16 2h3c1.7 0 3 1.3 3 3v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.6-.4-1-1-1h-3c-.6 0-1-.4-1-1s.4-1 1-1z"
        clipRule="evenodd"
      />
      <Mask id="maximize_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-1.7 1.3-3 3-3zm3 20c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 1.7 1.3 3 3 3h3zm13-7c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3-1.3 3-3v-3c0-.6-.4-1-1-1zM16 2h3c1.7 0 3 1.3 3 3v3c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.6-.4-1-1-1h-3c-.6 0-1-.4-1-1s.4-1 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#maximize_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMaximize;
