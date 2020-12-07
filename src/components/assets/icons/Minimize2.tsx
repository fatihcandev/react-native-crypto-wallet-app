import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMinimize2(props: SvgProps) {
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
        d="M20.3 2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L16.4 9H20c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.1 0-.3 0-.4-.1-.2-.1-.4-.3-.5-.5-.1-.1-.1-.3-.1-.4V4c0-.6.4-1 1-1s1 .4 1 1v3.6l5.3-5.3zM11 14c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1H4c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L9 16.4V20c0 .6.4 1 1 1s1-.4 1-1v-6z"
        clipRule="evenodd"
      />
      <Mask id="minimize-2_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.3 2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L16.4 9H20c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.1 0-.3 0-.4-.1-.2-.1-.4-.3-.5-.5-.1-.1-.1-.3-.1-.4V4c0-.6.4-1 1-1s1 .4 1 1v3.6l5.3-5.3zM11 14c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1H4c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L9 16.4V20c0 .6.4 1 1 1s1-.4 1-1v-6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#minimize-2_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMinimize2;
