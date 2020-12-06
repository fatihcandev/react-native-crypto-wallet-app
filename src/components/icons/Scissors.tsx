import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgScissors(props: SvgProps) {
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
        d="M20.3 3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 16c.4.6.6 1.3.6 2 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.4.2 2 .6l2.6-2.6L9 9.4c-.6.4-1.3.6-2 .6-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 .7-.2 1.4-.6 2l2.6 2.6 7.3-7.3zM7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.6 0 1-.2 1.4-.6.4-.4.6-.8.6-1.4 0-1.1-.9-2-2-2zm0 16c-1.1 0-2-.9-2-2s.9-2 2-2c.6 0 1 .2 1.4.6.4.4.6.8.6 1.4 0 1.1-.9 2-2 2zm14 1c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-5.5-5.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.5 5.5c.2.2.4.3.7.3z"
        clipRule="evenodd"
      />
      <Mask id="scissors_svg__a" width={19} height={20} x={3} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20.3 3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 16c.4.6.6 1.3.6 2 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.4.2 2 .6l2.6-2.6L9 9.4c-.6.4-1.3.6-2 .6-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 .7-.2 1.4-.6 2l2.6 2.6 7.3-7.3zM7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.6 0 1-.2 1.4-.6.4-.4.6-.8.6-1.4 0-1.1-.9-2-2-2zm0 16c-1.1 0-2-.9-2-2s.9-2 2-2c.6 0 1 .2 1.4.6.4.4.6.8.6 1.4 0 1.1-.9 2-2 2zm14 1c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-5.5-5.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.5 5.5c.2.2.4.3.7.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#scissors_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgScissors;
