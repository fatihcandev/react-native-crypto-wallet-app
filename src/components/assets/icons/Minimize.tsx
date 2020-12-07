import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMinimize(props: SvgProps) {
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
        d="M15 3v3c0 1.7 1.3 3 3 3h3c.6 0 1-.4 1-1s-.4-1-1-1h-3c-.6 0-1-.4-1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zM3 15h3c1.7 0 3 1.3 3 3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1H3c-.6 0-1-.4-1-1s.4-1 1-1zm18 0h-3c-1.7 0-3 1.3-3 3v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6.4-1 1-1h3c.6 0 1-.4 1-1s-.4-1-1-1zM7 3c0-.6.4-1 1-1s1 .4 1 1v3c0 1.7-1.3 3-3 3H3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1-.4 1-1V3z"
        clipRule="evenodd"
      />
      <Mask id="minimize_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 3v3c0 1.7 1.3 3 3 3h3c.6 0 1-.4 1-1s-.4-1-1-1h-3c-.6 0-1-.4-1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zM3 15h3c1.7 0 3 1.3 3 3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1H3c-.6 0-1-.4-1-1s.4-1 1-1zm18 0h-3c-1.7 0-3 1.3-3 3v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6.4-1 1-1h3c.6 0 1-.4 1-1s-.4-1-1-1zM7 3c0-.6.4-1 1-1s1 .4 1 1v3c0 1.7-1.3 3-3 3H3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1-.4 1-1V3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#minimize_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMinimize;
