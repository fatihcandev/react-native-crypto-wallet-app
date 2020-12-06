import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTablet(props: SvgProps) {
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
        d="M18 1H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3zm1 19c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v16zm-6-2c0-.2-.1-.5-.3-.7-.4-.4-1-.4-1.4 0-.05.05-.075.1-.1.15-.025.05-.05.1-.1.15-.1.1-.1.3-.1.4 0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7z"
        clipRule="evenodd"
      />
      <Mask id="tablet_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18 1H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3zm1 19c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v16zm-6-2c0-.2-.1-.5-.3-.7-.4-.4-1-.4-1.4 0-.05.05-.075.1-.1.15-.025.05-.05.1-.1.15-.1.1-.1.3-.1.4 0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#tablet_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTablet;
