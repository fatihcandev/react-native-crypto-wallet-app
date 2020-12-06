import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCornerLeftUp(props: SvgProps) {
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
        d="M21 19.975c0 .6-.4 1-1 1h-7c-2.8 0-5-2.2-5-5v-9.6l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l5-5c.1-.1.2-.2.3-.2.3-.1.5-.1.8 0 .1.1.2.1.3.2l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-3.3-3.3v9.6c0 1.7 1.3 3 3 3h7c.6 0 1 .4 1 1z"
      />
      <Mask
        id="corner-left-up_svg__a"
        width={18}
        height={18}
        x={3}
        y={3}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          d="M21 19.975c0 .6-.4 1-1 1h-7c-2.8 0-5-2.2-5-5v-9.6l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l5-5c.1-.1.2-.2.3-.2.3-.1.5-.1.8 0 .1.1.2.1.3.2l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-3.3-3.3v9.6c0 1.7 1.3 3 3 3h7c.6 0 1 .4 1 1z"
        />
      </Mask>
      <G mask="url(#corner-left-up_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCornerLeftUp;
