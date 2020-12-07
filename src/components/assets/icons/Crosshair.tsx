import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCrosshair(props: SvgProps) {
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
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm12 6v2.9c4.2-.4 7.5-3.7 7.9-7.9H18c-.6 0-1-.4-1-1s.4-1 1-1h2.9c-.4-4.1-3.7-7.4-7.9-7.9V6c0 .6-.4 1-1 1s-1-.4-1-1V3.1c-4.2.4-7.5 3.7-7.9 7.9H6c.6 0 1 .4 1 1s-.4 1-1 1H3.1c.4 4.1 3.7 7.4 7.9 7.9V18c0-.6.4-1 1-1s1 .4 1 1z"
        clipRule="evenodd"
      />
      <Mask id="crosshair_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm12 6v2.9c4.2-.4 7.5-3.7 7.9-7.9H18c-.6 0-1-.4-1-1s.4-1 1-1h2.9c-.4-4.1-3.7-7.4-7.9-7.9V6c0 .6-.4 1-1 1s-1-.4-1-1V3.1c-4.2.4-7.5 3.7-7.9 7.9H6c.6 0 1 .4 1 1s-.4 1-1 1H3.1c.4 4.1 3.7 7.4 7.9 7.9V18c0-.6.4-1 1-1s1 .4 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#crosshair_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCrosshair;
