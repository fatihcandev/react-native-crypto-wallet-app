import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUnderline(props: SvgProps) {
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
        d="M5 3v7c0 3.9 3.1 7 7 7s7-3.1 7-7V3c0-.6-.4-1-1-1s-1 .4-1 1v7c0 2.8-2.2 5-5 5s-5-2.2-5-5V3c0-.6-.4-1-1-1s-1 .4-1 1zM3 21c0-.6.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1z"
        clipRule="evenodd"
      />
      <Mask id="underline_svg__a" width={18} height={20} x={3} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 3v7c0 3.9 3.1 7 7 7s7-3.1 7-7V3c0-.6-.4-1-1-1s-1 .4-1 1v7c0 2.8-2.2 5-5 5s-5-2.2-5-5V3c0-.6-.4-1-1-1s-1 .4-1 1zM3 21c0-.6.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#underline_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUnderline;
