import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgZoomOut(props: SvgProps) {
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
        d="M21.7 20.3L18 16.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.1 0 4.1-.7 5.6-2l3.7 3.7c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.8 3.7-2 4.9-1.3 1.3-3 2-4.9 2-4 .1-7.1-3-7.1-6.9zm10 1c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1h6z"
        clipRule="evenodd"
      />
      <Mask id="zoom-out_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.7 20.3L18 16.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.1 0 4.1-.7 5.6-2l3.7 3.7c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.8 3.7-2 4.9-1.3 1.3-3 2-4.9 2-4 .1-7.1-3-7.1-6.9zm10 1c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1h6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#zoom-out_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgZoomOut;
