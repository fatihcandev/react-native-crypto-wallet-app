import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerUpLeft(props: SvgProps) {
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
        d="M20.975 13v7c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-1.7-1.3-3-3-3h-9.6l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5c-.1-.1-.2-.2-.2-.3-.1-.3-.1-.5 0-.8.1-.1.1-.2.2-.3l5-5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.375 8h9.6c2.8 0 5 2.2 5 5z"
      />
      <Mask
        id="corner-up-left_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          d="M20.975 13v7c0 .6-.4 1-1 1s-1-.4-1-1v-7c0-1.7-1.3-3-3-3h-9.6l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5c-.1-.1-.2-.2-.2-.3-.1-.3-.1-.5 0-.8.1-.1.1-.2.2-.3l5-5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.375 8h9.6c2.8 0 5 2.2 5 5z"
        />
      </Mask>
      <G mask="url(#corner-up-left_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerUpLeft;
