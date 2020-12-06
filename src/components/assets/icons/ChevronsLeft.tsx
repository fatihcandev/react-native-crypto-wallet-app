import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronsLeft(props: SvgProps) {
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
        d="M11.7 17.7c.4-.4.4-1 0-1.4L7.4 12l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3.3 0 .5-.1.7-.3zm7-10L14.4 12l4.3 4.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
        clipRule="evenodd"
      />
      <Mask id="chevrons-left_svg__a" width={14} height={12} x={5} y={6} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M11.7 17.7c.4-.4.4-1 0-1.4L7.4 12l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3.3 0 .5-.1.7-.3zm7-10L14.4 12l4.3 4.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#chevrons-left_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronsLeft;
