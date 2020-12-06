import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMessageSquare(props: SvgProps) {
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
        d="M5 2h14c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7.4l-3.7 3.7c-.2.2-.4.3-.7.3-.1 0-.3 0-.4-.1-.4-.1-.6-.5-.6-.9V5c0-1.7 1.3-3 3-3zm14 14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v13.6l2.3-2.3c.2-.2.4-.3.7-.3h12z"
        clipRule="evenodd"
      />
      <Mask
        id="message-square_svg__a"
        width={20}
        height={20}
        x={2}
        y={2}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 2h14c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7.4l-3.7 3.7c-.2.2-.4.3-.7.3-.1 0-.3 0-.4-.1-.4-.1-.6-.5-.6-.9V5c0-1.7 1.3-3 3-3zm14 14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v13.6l2.3-2.3c.2-.2.4-.3.7-.3h12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#message-square_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMessageSquare;
