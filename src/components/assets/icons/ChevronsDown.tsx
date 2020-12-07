import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronsDown(props: SvgProps) {
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
        d="M12 12c-.2 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 9.6l4.3-4.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-5 5c-.2.2-.5.3-.7.3zm5.7 1.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 16.6l-4.3-4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5z"
        clipRule="evenodd"
      />
      <Mask id="chevrons-down_svg__a" width={12} height={14} x={6} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 12c-.2 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 9.6l4.3-4.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-5 5c-.2.2-.5.3-.7.3zm5.7 1.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 16.6l-4.3-4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#chevrons-down_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronsDown;
