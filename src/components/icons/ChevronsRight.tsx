import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgChevronsRight(props: SvgProps) {
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
        d="M6.7 6.3l5 5c.4.4.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L9.6 12 5.3 7.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0zm7 11.4l5-5c.4-.4.4-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
        clipRule="evenodd"
      />
      <Mask
        id="chevrons-right_svg__a"
        width={14}
        height={12}
        x={5}
        y={6}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6.7 6.3l5 5c.4.4.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L9.6 12 5.3 7.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0zm7 11.4l5-5c.4-.4.4-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#chevrons-right_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgChevronsRight;
