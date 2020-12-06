import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSidebar(props: SvgProps) {
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
        d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 19V5c0-.6.4-1 1-1h3v16H5c-.6 0-1-.4-1-1zm15 1c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-9v16h9z"
        clipRule="evenodd"
      />
      <Mask id="sidebar_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 19V5c0-.6.4-1 1-1h3v16H5c-.6 0-1-.4-1-1zm15 1c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-9v16h9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#sidebar_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSidebar;
