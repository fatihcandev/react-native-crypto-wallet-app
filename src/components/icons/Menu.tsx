import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMenu(props: SvgProps) {
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
        d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm19 5c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1zM3 17h18c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z"
        clipRule="evenodd"
      />
      <Mask id="menu_svg__a" width={20} height={14} x={2} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm19 5c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1zM3 17h18c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#menu_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMenu;
