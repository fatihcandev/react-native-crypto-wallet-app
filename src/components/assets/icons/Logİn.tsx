import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLogİn(props: SvgProps) {
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
        d="M19 23c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3h-5c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-5c-.6 0-1 .4-1 1s.4 1 1 1h5zm-3.1-11.4c.1.3.1.6 0 .8 0 .1-.1.2-.2.3l-4 4c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.3-2.3H3c-.6 0-1-.4-1-1s.4-1 1-1h9.6l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l4 4c.05.05.075.1.1.15.025.05.05.1.1.15z"
        clipRule="evenodd"
      />
      <Mask id="log-in_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 23c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3h-5c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-5c-.6 0-1 .4-1 1s.4 1 1 1h5zm-3.1-11.4c.1.3.1.6 0 .8 0 .1-.1.2-.2.3l-4 4c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.3-2.3H3c-.6 0-1-.4-1-1s.4-1 1-1h9.6l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l4 4c.05.05.075.1.1.15.025.05.05.1.1.15z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#log-in_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLogİn;
