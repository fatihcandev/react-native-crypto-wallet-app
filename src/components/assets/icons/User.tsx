import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUser(props: SvgProps) {
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
        d="M7 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm14 12v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-1.7-1.3-3-3-3H8c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5zm-9-9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        clipRule="evenodd"
      />
      <Mask id="user_svg__a" width={18} height={20} x={3} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm14 12v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-1.7-1.3-3-3-3H8c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5zm-9-9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#user_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUser;
