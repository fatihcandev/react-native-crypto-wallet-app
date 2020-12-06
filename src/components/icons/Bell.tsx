import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBell(props: SvgProps) {
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
        d="M23 17c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1s.4-1 1-1c1.1 0 2-.9 2-2V9c0-4.4 3.6-8 8-8s8 3.6 8 8v5c0 1.1.9 2 2 2 .6 0 1 .4 1 1zm-8.4 4.5C14 22.5 13 23 12 23c-.5 0-1-.1-1.5-.4-.5-.3-.8-.6-1.1-1.1-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4.03.03.06.07.094.113.076.099.167.217.306.287.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.4.5.2.5.9.2 1.4zM18 14c0 .7.2 1.4.5 2h-13c.3-.6.5-1.3.5-2V9c0-3.3 2.7-6 6-6s6 2.7 6 6v5z"
        clipRule="evenodd"
      />
      <Mask id="bell_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23 17c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1s.4-1 1-1c1.1 0 2-.9 2-2V9c0-4.4 3.6-8 8-8s8 3.6 8 8v5c0 1.1.9 2 2 2 .6 0 1 .4 1 1zm-8.4 4.5C14 22.5 13 23 12 23c-.5 0-1-.1-1.5-.4-.5-.3-.8-.6-1.1-1.1-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4.03.03.06.07.094.113.076.099.167.217.306.287.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.4.5.2.5.9.2 1.4zM18 14c0 .7.2 1.4.5 2h-13c.3-.6.5-1.3.5-2V9c0-3.3 2.7-6 6-6s6 2.7 6 6v5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#bell_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBell;
