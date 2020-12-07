import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAnchor(props: SvgProps) {
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
        d="M19 11h3c.6 0 1 .4 1 1.1 0 6.1-4.9 11-11 11s-11-4.9-11-11c0-.6.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1H3.1c.4 4.1 3.7 7.4 7.9 7.9V8.9c-1.7-.5-3-2-3-3.9 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.5-3 3.9v12c4.1-.4 7.4-3.7 7.9-7.9H19c-.6 0-1-.4-1-1s.4-1 1-1zm-7-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        clipRule="evenodd"
      />
      <Mask id="anchor_svg__a" width={22} height={23} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 11h3c.6 0 1 .4 1 1.1 0 6.1-4.9 11-11 11s-11-4.9-11-11c0-.6.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1H3.1c.4 4.1 3.7 7.4 7.9 7.9V8.9c-1.7-.5-3-2-3-3.9 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.5-3 3.9v12c4.1-.4 7.4-3.7 7.9-7.9H19c-.6 0-1-.4-1-1s.4-1 1-1zm-7-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#anchor_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAnchor;
