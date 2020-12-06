import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgClipboard(props: SvgProps) {
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
        d="M18 3h-1c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2H6C4.3 3 3 4.3 3 6v14c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM9 3h6v2H9V3zm9 18c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2H6c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12z"
        clipRule="evenodd"
      />
      <Mask id="clipboard_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18 3h-1c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2H6C4.3 3 3 4.3 3 6v14c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM9 3h6v2H9V3zm9 18c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1h-1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2H6c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#clipboard_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgClipboard;
