import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMonitor(props: SvgProps) {
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
        d="M4 2h16c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3h-7v2h3c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm16 14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h16z"
        clipRule="evenodd"
      />
      <Mask id="monitor_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4 2h16c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3h-7v2h3c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm16 14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h16z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#monitor_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMonitor;
