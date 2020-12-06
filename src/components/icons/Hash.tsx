import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgHash(props: SvgProps) {
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
        d="M15.8 14.015H20c.6 0 1 .4 1 1s-.4 1-1 1h-4.4l-.6 5.1c-.1.5-.5.9-1 .9h-.1c-.6-.1-1-.6-.9-1.1l.6-4.9h-4l-.6 5.1c-.1.5-.5.9-1 .9h-.1c-.6-.1-1-.6-.9-1.1l.5-4.9H4c-.6 0-1-.4-1-1s.4-1 1-1h3.8l.4-4H4c-.6 0-1-.4-1-1s.4-1 1-1h4.4l.6-5.1c.1-.6.6-1 1.1-.9.6.1 1 .6.9 1.1l-.6 4.9h4l.6-5.1c.1-.6.6-1 1.1-.9.6.1 1 .6.9 1.1l-.5 4.9H20c.6 0 1 .4 1 1s-.4 1-1 1h-3.8l-.4 4zm-5.6-4l-.4 4h4l.4-4h-4z"
        clipRule="evenodd"
      />
      <Mask id="hash_svg__a" width={18} height={21} x={3} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M15.8 14.015H20c.6 0 1 .4 1 1s-.4 1-1 1h-4.4l-.6 5.1c-.1.5-.5.9-1 .9h-.1c-.6-.1-1-.6-.9-1.1l.6-4.9h-4l-.6 5.1c-.1.5-.5.9-1 .9h-.1c-.6-.1-1-.6-.9-1.1l.5-4.9H4c-.6 0-1-.4-1-1s.4-1 1-1h3.8l.4-4H4c-.6 0-1-.4-1-1s.4-1 1-1h4.4l.6-5.1c.1-.6.6-1 1.1-.9.6.1 1 .6.9 1.1l-.6 4.9h4l.6-5.1c.1-.6.6-1 1.1-.9.6.1 1 .6.9 1.1l-.5 4.9H20c.6 0 1 .4 1 1s-.4 1-1 1h-3.8l-.4 4zm-5.6-4l-.4 4h4l.4-4h-4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#hash_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgHash;
