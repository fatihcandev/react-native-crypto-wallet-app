import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMic(props: SvgProps) {
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
        d="M12 16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4S8 1.8 8 4v8c0 2.2 1.8 4 4 4zM10 4c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2s-2-.9-2-2V4zm10 8v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 3.3-2.7 6-6 6s-6-2.7-6-6v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 4 3.1 7.4 7 7.9V22H8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-2.1c3.9-.5 7-3.8 7-7.9z"
        clipRule="evenodd"
      />
      <Mask id="mic_svg__a" width={16} height={24} x={4} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4S8 1.8 8 4v8c0 2.2 1.8 4 4 4zM10 4c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2s-2-.9-2-2V4zm10 8v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 3.3-2.7 6-6 6s-6-2.7-6-6v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 4 3.1 7.4 7 7.9V22H8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-2.1c3.9-.5 7-3.8 7-7.9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#mic_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMic;
