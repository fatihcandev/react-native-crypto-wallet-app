import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUserX(props: SvgProps) {
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
        d="M8.5 2c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM17 21v-2c0-2.8-2.2-5-5-5H5c-2.8 0-5 2.2-5 5v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-1.7 1.3-3 3-3h7c1.7 0 3 1.3 3 3v2c0 .6.4 1 1 1s1-.4 1-1zM5.5 7c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3zm18.2 1.7l-1.8 1.8 1.8 1.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-1.8-1.8-1.8 1.8c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.8 1.8 1.8-1.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
        clipRule="evenodd"
      />
      <Mask id="user-x_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M8.5 2c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM17 21v-2c0-2.8-2.2-5-5-5H5c-2.8 0-5 2.2-5 5v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-1.7 1.3-3 3-3h7c1.7 0 3 1.3 3 3v2c0 .6.4 1 1 1s1-.4 1-1zM5.5 7c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3zm18.2 1.7l-1.8 1.8 1.8 1.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-1.8-1.8-1.8 1.8c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.8 1.8 1.8-1.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#user-x_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUserX;
