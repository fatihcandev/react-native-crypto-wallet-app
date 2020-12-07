import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBattery(props: SvgProps) {
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
        d="M17 5H3C1.3 5 0 6.3 0 8v8c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v8zm6-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1z"
        clipRule="evenodd"
      />
      <Mask id="battery_svg__a" width={24} height={14} x={0} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 5H3C1.3 5 0 6.3 0 8v8c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v8zm6-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#battery_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBattery;
