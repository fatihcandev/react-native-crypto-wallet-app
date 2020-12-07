import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCpu(props: SvgProps) {
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
        d="M23 13h-2v-3h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V6c0-1.7-1.3-3-3-3h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v2h-4V1c0-.6-.4-1-1-1S8 .4 8 1v2H6C4.3 3 3 4.3 3 6v2H1c-.6 0-1 .4-1 1s.4 1 1 1h2v3H1c-.6 0-1 .4-1 1s.4 1 1 1h2v3c0 1.7 1.3 3 3 3h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h4v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c1.7 0 3-1.3 3-3v-3h2c.6 0 1-.4 1-1s-.4-1-1-1zM9 8h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1zm1 6h4v-4h-4v4zm8 5c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12z"
        clipRule="evenodd"
      />
      <Mask id="cpu_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 13h-2v-3h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V6c0-1.7-1.3-3-3-3h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v2h-4V1c0-.6-.4-1-1-1S8 .4 8 1v2H6C4.3 3 3 4.3 3 6v2H1c-.6 0-1 .4-1 1s.4 1 1 1h2v3H1c-.6 0-1 .4-1 1s.4 1 1 1h2v3c0 1.7 1.3 3 3 3h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h4v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c1.7 0 3-1.3 3-3v-3h2c.6 0 1-.4 1-1s-.4-1-1-1zM9 8h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1zm1 6h4v-4h-4v4zm8 5c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#cpu_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCpu;
