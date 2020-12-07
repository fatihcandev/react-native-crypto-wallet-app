import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerUpRight(props: SvgProps) {
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
        d="M20.7 9.7l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.3-3.3H8c-1.7 0-3 1.3-3 3v7c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-2.8 2.2-5 5-5h9.6l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.1.1.2.2.2.3.1.2.1.5 0 .8 0 .1-.1.2-.2.3z"
      />
      <Mask
        id="corner-up-right_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          d="M20.7 9.7l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.3-3.3H8c-1.7 0-3 1.3-3 3v7c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-2.8 2.2-5 5-5h9.6l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.1.1.2.2.2.3.1.2.1.5 0 .8 0 .1-.1.2-.2.3z"
        />
      </Mask>
      <G mask="url(#corner-up-right_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerUpRight;
