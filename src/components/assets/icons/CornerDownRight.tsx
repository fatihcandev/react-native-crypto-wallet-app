import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerDownRight(props: SvgProps) {
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
        d="M20.7 15.7l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.3-3.3H8c-2.8 0-5-2.2-5-5V4c0-.6.4-1 1-1s1 .4 1 1v7c0 1.7 1.3 3 3 3h9.6l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.1.1.2.2.2.3.1.2.1.5 0 .8 0 .1-.1.2-.2.3z"
      />
      <Mask
        id="corner-down-right_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          d="M20.7 15.7l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.3-3.3H8c-2.8 0-5-2.2-5-5V4c0-.6.4-1 1-1s1 .4 1 1v7c0 1.7 1.3 3 3 3h9.6l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.1.1.2.2.2.3.1.2.1.5 0 .8 0 .1-.1.2-.2.3z"
        />
      </Mask>
      <G mask="url(#corner-down-right_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerDownRight;
