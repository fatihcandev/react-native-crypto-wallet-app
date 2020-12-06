import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAirplay(props: SvgProps) {
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
        d="M20 18h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h1c.6 0 1 .4 1 1s-.4 1-1 1H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3zm-2.1 3.4c.2-.4.1-.8-.1-1.1l-5-6c-.4-.5-1.2-.5-1.5 0l-5 6c-.2.3-.3.7-.1 1.1.1.4.4.6.8.6h10c.4 0 .7-.2.9-.6zm-3-1.4L12 16.6 9.1 20h5.8z"
        clipRule="evenodd"
      />
      <Mask id="airplay_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 18h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h1c.6 0 1 .4 1 1s-.4 1-1 1H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3zm-2.1 3.4c.2-.4.1-.8-.1-1.1l-5-6c-.4-.5-1.2-.5-1.5 0l-5 6c-.2.3-.3.7-.1 1.1.1.4.4.6.8.6h10c.4 0 .7-.2.9-.6zm-3-1.4L12 16.6 9.1 20h5.8z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#airplay_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAirplay;
