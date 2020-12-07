import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPocket(props: SvgProps) {
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
        d="M20 2H4C2.3 2 1 3.3 1 5v6c0 6.1 4.9 11 11 11s11-4.9 11-11V5c0-1.7-1.3-3-3-3zm1 9c0 5-4 9-9 9s-9-4-9-9V5c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v6zm-4.3-.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 12.6 8.7 9.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4z"
        clipRule="evenodd"
      />
      <Mask id="pocket_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 2H4C2.3 2 1 3.3 1 5v6c0 6.1 4.9 11 11 11s11-4.9 11-11V5c0-1.7-1.3-3-3-3zm1 9c0 5-4 9-9 9s-9-4-9-9V5c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v6zm-4.3-.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 12.6 8.7 9.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#pocket_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPocket;
