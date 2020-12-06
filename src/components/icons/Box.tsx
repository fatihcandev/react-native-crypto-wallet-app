import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBox(props: SvgProps) {
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
        d="M13.3.6l8 4c1.1.5 1.7 1.5 1.7 2.6v9.5c0 1.2-.7 2.2-1.7 2.7l-8 4c-.4.2-.8.3-1.3.3-.4 0-.9-.1-1.3-.3l-8-4C1.6 18.9 1 17.8 1 16.7V7.2c0-1.1.6-2.1 1.6-2.6l8-4c.9-.4 1.9-.4 2.7 0zM12 2.2c-.1 0-.3 0-.4.1L4.2 6 12 9.9 19.8 6l-7.4-3.7c-.1-.1-.2-.1-.4-.1zM3.5 17.7c-.3-.2-.5-.6-.5-.9V7.6l8 4v9.8l-7.5-3.7zm9.5 3.7l7.4-3.7c.4-.2.6-.5.6-.9V7.6l-8 4v9.8z"
        clipRule="evenodd"
      />
      <Mask id="box_svg__a" width={22} height={24} x={1} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M13.3.6l8 4c1.1.5 1.7 1.5 1.7 2.6v9.5c0 1.2-.7 2.2-1.7 2.7l-8 4c-.4.2-.8.3-1.3.3-.4 0-.9-.1-1.3-.3l-8-4C1.6 18.9 1 17.8 1 16.7V7.2c0-1.1.6-2.1 1.6-2.6l8-4c.9-.4 1.9-.4 2.7 0zM12 2.2c-.1 0-.3 0-.4.1L4.2 6 12 9.9 19.8 6l-7.4-3.7c-.1-.1-.2-.1-.4-.1zM3.5 17.7c-.3-.2-.5-.6-.5-.9V7.6l8 4v9.8l-7.5-3.7zm9.5 3.7l7.4-3.7c.4-.2.6-.5.6-.9V7.6l-8 4v9.8z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#box_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBox;
