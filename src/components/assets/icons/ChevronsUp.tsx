import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronsUp(props: SvgProps) {
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
        d="M6.3 10.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L12 7.4l4.3 4.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5zm0 7l5-5c.4-.4 1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L12 14.4l-4.3 4.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"
        clipRule="evenodd"
      />
      <Mask id="chevrons-up_svg__a" width={12} height={14} x={6} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.3 10.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L12 7.4l4.3 4.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5zm0 7l5-5c.4-.4 1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L12 14.4l-4.3 4.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#chevrons-up_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronsUp;
