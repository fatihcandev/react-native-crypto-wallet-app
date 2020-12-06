import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronUp(props: SvgProps) {
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
        d="M18.7 15.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 10.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z"
      />
      <Mask id="chevron-up_svg__a" width={14} height={8} x={5} y={8} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          d="M18.7 15.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L12 10.4l-5.3 5.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z"
        />
      </Mask>
      <G mask="url(#chevron-up_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronUp;
