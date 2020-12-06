import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCompass(props: SvgProps) {
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
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm12.9-5.2L9.6 8.9c-.3.1-.6.4-.7.7L6.8 16c-.1.4 0 .8.2 1 .2.2.4.3.7.3.1 0 .2 0 .3-.1l6.4-2.1c.3-.1.5-.3.6-.6l2.1-6.4c.1-.4 0-.8-.2-1-.2-.3-.6-.4-1-.3zm-6.6 7.8l4-1.3 1.3-4-4 1.3-1.3 4z"
        clipRule="evenodd"
      />
      <Mask id="compass_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm12.9-5.2L9.6 8.9c-.3.1-.6.4-.7.7L6.8 16c-.1.4 0 .8.2 1 .2.2.4.3.7.3.1 0 .2 0 .3-.1l6.4-2.1c.3-.1.5-.3.6-.6l2.1-6.4c.1-.4 0-.8-.2-1-.2-.3-.6-.4-1-.3zm-6.6 7.8l4-1.3 1.3-4-4 1.3-1.3 4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#compass_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCompass;
