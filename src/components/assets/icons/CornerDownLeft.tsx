import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerDownLeft(props: SvgProps) {
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
        d="M21 4v7c0 2.8-2.203 5-5.007 5H6.38l3.304 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.301 0-.501-.1-.702-.3l-5.007-5c-.1-.1-.2-.2-.2-.3-.1-.2-.1-.5 0-.8.1-.1.1-.2.2-.3l5.007-5c.4-.4 1.002-.4 1.402 0 .4.4.4 1 0 1.4L6.38 14h9.613c1.702 0 3.004-1.3 3.004-3V4c0-.6.4-1 1.002-1 .6 0 1.001.4 1.001 1z"
      />
      <Mask
        id="corner-down-left_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          d="M21 4v7c0 2.8-2.203 5-5.007 5H6.38l3.304 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.301 0-.501-.1-.702-.3l-5.007-5c-.1-.1-.2-.2-.2-.3-.1-.2-.1-.5 0-.8.1-.1.1-.2.2-.3l5.007-5c.4-.4 1.002-.4 1.402 0 .4.4.4 1 0 1.4L6.38 14h9.613c1.702 0 3.004-1.3 3.004-3V4c0-.6.4-1 1.002-1 .6 0 1.001.4 1.001 1z"
        />
      </Mask>
      <G mask="url(#corner-down-left_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerDownLeft;
