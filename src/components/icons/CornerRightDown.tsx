import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerRightDown(props: SvgProps) {
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
        d="M20.7 15.7l-5 5c-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3V8c0-1.7-1.3-3-3-3H4c-.6 0-1-.4-1-1s.4-1 1-1h7c2.8 0 5 2.2 5 5v9.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
      />
      <Mask
        id="corner-right-down_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          d="M20.7 15.7l-5 5c-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3V8c0-1.7-1.3-3-3-3H4c-.6 0-1-.4-1-1s.4-1 1-1h7c2.8 0 5 2.2 5 5v9.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
        />
      </Mask>
      <G mask="url(#corner-right-down_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerRightDown;
