import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTerminal(props: SvgProps) {
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
        d="M4.7 17.7l6-6c.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 11l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3zm7.3.3h8c.6 0 1 .4 1 1s-.4 1-1 1h-8c-.6 0-1-.4-1-1s.4-1 1-1z"
        clipRule="evenodd"
      />
      <Mask id="terminal_svg__a" width={18} height={16} x={3} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.7 17.7l6-6c.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 11l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3zm7.3.3h8c.6 0 1 .4 1 1s-.4 1-1 1h-8c-.6 0-1-.4-1-1s.4-1 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#terminal_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTerminal;
