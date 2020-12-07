import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBookOpen(props: SvgProps) {
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
        d="M22 2h-6c-1.6 0-3.1.8-4 2-.9-1.2-2.4-2-4-2H2c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h7c1.1 0 2 .9 2 2 0 .6.4 1 1 1s1-.4 1-1c0-1.1.9-2 2-2h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM11 17.5c-.6-.3-1.3-.5-2-.5H3V4h5c1.7 0 3 1.3 3 3v10.5zm4-.5h6V4h-5c-1.7 0-3 1.3-3 3v10.5c.6-.3 1.3-.5 2-.5z"
        clipRule="evenodd"
      />
      <Mask id="book-open_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 2h-6c-1.6 0-3.1.8-4 2-.9-1.2-2.4-2-4-2H2c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h7c1.1 0 2 .9 2 2 0 .6.4 1 1 1s1-.4 1-1c0-1.1.9-2 2-2h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM11 17.5c-.6-.3-1.3-.5-2-.5H3V4h5c1.7 0 3 1.3 3 3v10.5zm4-.5h6V4h-5c-1.7 0-3 1.3-3 3v10.5c.6-.3 1.3-.5 2-.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#book-open_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBookOpen;
