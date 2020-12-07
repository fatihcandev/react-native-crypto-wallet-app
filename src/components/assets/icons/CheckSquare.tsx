import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCheckSquare(props: SvgProps) {
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
        d="M19 12c0-.6.4-1 1-1s1 .4 1 1v7c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h11c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-7zm-7.3 2.7l11-11c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 12.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
        clipRule="evenodd"
      />
      <Mask id="check-square_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 12c0-.6.4-1 1-1s1 .4 1 1v7c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h11c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-7zm-7.3 2.7l11-11c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 12.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#check-square_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCheckSquare;
