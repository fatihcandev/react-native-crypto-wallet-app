import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVideoOff(props: SvgProps) {
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
        d="M23.7 22.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5.5-5.5c-.5 1-1.6 1.8-2.8 1.8H3c-1.7 0-3-1.3-3-3V7c0-1.5 1.1-2.8 2.6-3L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l4 4 11 11 7 7zM24 7v10c0 .6-.4 1-1 1s-1-.4-1-1V9l-4.4 3.2c-.4.3-.9.2-1.3-.1l-1-1c-.2-.2-.3-.4-.3-.7V7c0-.6-.4-1-1-1h-3.3c-.6 0-1-.4-1-1s.4-1 1-1H14c1.7 0 3 1.3 3 3v2.9l.1.1 5.3-3.8c.3-.2.7-.3 1-.1.4.2.6.5.6.9zM4.6 6L15 16.4v.6c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h1.6z"
        clipRule="evenodd"
      />
      <Mask id="video-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23.7 22.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5.5-5.5c-.5 1-1.6 1.8-2.8 1.8H3c-1.7 0-3-1.3-3-3V7c0-1.5 1.1-2.8 2.6-3L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l4 4 11 11 7 7zM24 7v10c0 .6-.4 1-1 1s-1-.4-1-1V9l-4.4 3.2c-.4.3-.9.2-1.3-.1l-1-1c-.2-.2-.3-.4-.3-.7V7c0-.6-.4-1-1-1h-3.3c-.6 0-1-.4-1-1s.4-1 1-1H14c1.7 0 3 1.3 3 3v2.9l.1.1 5.3-3.8c.3-.2.7-.3 1-.1.4.2.6.5.6.9zM4.6 6L15 16.4v.6c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h1.6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#video-off_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVideoOff;
