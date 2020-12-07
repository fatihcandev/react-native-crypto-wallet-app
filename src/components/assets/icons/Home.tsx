import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgHome(props: SvgProps) {
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
        d="M21.6 8.217l-9-6.992c-.4-.3-.9-.3-1.2 0l-9 6.992c-.3.2-.4.5-.4.799v10.987C2 21.701 3.3 23 5 23h14c1.7 0 3-1.299 3-2.997V9.016c0-.3-.1-.6-.4-.8zM14 13.01v7.991h-4v-7.99h4zm5 7.991c.6 0 1-.4 1-.999V9.515l-8-6.193-8 6.193v10.488c0 .6.4 1 1 1h3v-8.99c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v8.99h3z"
        clipRule="evenodd"
      />
      <Mask id="home_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.6 8.217l-9-6.992c-.4-.3-.9-.3-1.2 0l-9 6.992c-.3.2-.4.5-.4.799v10.987C2 21.701 3.3 23 5 23h14c1.7 0 3-1.299 3-2.997V9.016c0-.3-.1-.6-.4-.8zM14 13.01v7.991h-4v-7.99h4zm5 7.991c.6 0 1-.4 1-.999V9.515l-8-6.193-8 6.193v10.488c0 .6.4 1 1 1h3v-8.99c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v8.99h3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#home_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgHome;
