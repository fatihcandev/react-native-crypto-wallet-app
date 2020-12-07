import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronLeft(props: SvgProps) {
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
        d="M15.7 17.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l5.3 5.3z"
      />
      <Mask id="chevron-left_svg__a" width={8} height={14} x={8} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          d="M15.7 17.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l5.3 5.3z"
        />
      </Mask>
      <G mask="url(#chevron-left_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronLeft;
