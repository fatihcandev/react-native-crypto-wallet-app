import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLink2(props: SvgProps) {
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
        d="M10 17c0 .6-.4 1-1 1H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c.6 0 1 .4 1 1s-.4 1-1 1H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h3c.6 0 1 .4 1 1zm8-11h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zM8 13c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1H8z"
        clipRule="evenodd"
      />
      <Mask id="link-2_svg__a" width={24} height={12} x={0} y={6} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 17c0 .6-.4 1-1 1H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c.6 0 1 .4 1 1s-.4 1-1 1H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h3c.6 0 1 .4 1 1zm8-11h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zM8 13c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1H8z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#link-2_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLink2;
