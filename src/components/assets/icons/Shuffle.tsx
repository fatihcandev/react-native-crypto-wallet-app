import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgShuffle(props: SvgProps) {
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
        d="M22 3v5c0 .6-.4 1-1 1s-1-.4-1-1V5.4L4.7 20.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L18.6 4H16c-.6 0-1-.4-1-1s.4-1 1-1h5c.1 0 .3 0 .4.1.2.1.4.3.5.5.1.1.1.3.1.4zm-1 12c-.6 0-1 .4-1 1v2.6l-4.3-4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3H16c-.6 0-1 .4-1 1s.4 1 1 1h5c.1 0 .3 0 .4-.1.2-.1.4-.3.5-.5.1-.1.1-.3.1-.4v-5c0-.6-.4-1-1-1zM9 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
        clipRule="evenodd"
      />
      <Mask id="shuffle_svg__a" width={19} height={20} x={3} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 3v5c0 .6-.4 1-1 1s-1-.4-1-1V5.4L4.7 20.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L18.6 4H16c-.6 0-1-.4-1-1s.4-1 1-1h5c.1 0 .3 0 .4.1.2.1.4.3.5.5.1.1.1.3.1.4zm-1 12c-.6 0-1 .4-1 1v2.6l-4.3-4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3H16c-.6 0-1 .4-1 1s.4 1 1 1h5c.1 0 .3 0 .4-.1.2-.1.4-.3.5-.5.1-.1.1-.3.1-.4v-5c0-.6-.4-1-1-1zM9 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#shuffle_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgShuffle;
