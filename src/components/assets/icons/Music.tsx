import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMusic(props: SvgProps) {
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
        d="M21.6 2.2c-.2-.2-.5-.2-.8-.2l-12 2c-.4.1-.8.5-.8 1v11H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h2c1.7 0 3-1.3 3-3V5.8l10-1.7V14h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h2c1.7 0 3-1.3 3-3V3c0-.3-.1-.6-.4-.8zM8 19c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3v1zm11-1c.6 0 1-.4 1-1v-1h-3c-.6 0-1 .4-1 1s.4 1 1 1h2z"
        clipRule="evenodd"
      />
      <Mask id="music_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M21.6 2.2c-.2-.2-.5-.2-.8-.2l-12 2c-.4.1-.8.5-.8 1v11H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h2c1.7 0 3-1.3 3-3V5.8l10-1.7V14h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h2c1.7 0 3-1.3 3-3V3c0-.3-.1-.6-.4-.8zM8 19c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3v1zm11-1c.6 0 1-.4 1-1v-1h-3c-.6 0-1 .4-1 1s.4 1 1 1h2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#music_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMusic;
