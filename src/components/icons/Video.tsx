import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVideo(props: SvgProps) {
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
        d="M23.5 6.1c-.3-.2-.7-.1-1 .1L17 10.1V7c0-1.7-1.3-3-3-3H3C1.3 4 0 5.3 0 7v10c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-3.1l5.4 3.9c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9zM15 17c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v10zm2.7-5l4.3 3.1V8.9L17.7 12z"
        clipRule="evenodd"
      />
      <Mask id="video_svg__a" width={24} height={16} x={0} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23.5 6.1c-.3-.2-.7-.1-1 .1L17 10.1V7c0-1.7-1.3-3-3-3H3C1.3 4 0 5.3 0 7v10c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-3.1l5.4 3.9c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9zM15 17c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v10zm2.7-5l4.3 3.1V8.9L17.7 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#video_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVideo;
