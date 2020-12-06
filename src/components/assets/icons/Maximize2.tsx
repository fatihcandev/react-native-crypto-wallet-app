import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMaximize2(props: SvgProps) {
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
        d="M22 9V3c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1h-6c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L20 5.4V9c0 .6.4 1 1 1s1-.4 1-1zM4 18.6l5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.4 20H9c.6 0 1 .4 1 1s-.4 1-1 1H3c-.1 0-.3 0-.4-.1-.2-.1-.4-.3-.5-.5-.1-.1-.1-.3-.1-.4v-6c0-.6.4-1 1-1s1 .4 1 1v3.6z"
        clipRule="evenodd"
      />
      <Mask id="maximize-2_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M22 9V3c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1h-6c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L20 5.4V9c0 .6.4 1 1 1s1-.4 1-1zM4 18.6l5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L5.4 20H9c.6 0 1 .4 1 1s-.4 1-1 1H3c-.1 0-.3 0-.4-.1-.2-.1-.4-.3-.5-.5-.1-.1-.1-.3-.1-.4v-6c0-.6.4-1 1-1s1 .4 1 1v3.6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#maximize-2_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMaximize2;
