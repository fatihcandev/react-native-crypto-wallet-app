import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFile(props: SvgProps) {
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
        d="M20.9 8.6a.523.523 0 01-.1-.15c-.025-.05-.05-.1-.1-.15l-7-7c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM14 4.4L17.6 8H14V4.4zM6 21h12c.6 0 1-.4 1-1V10h-6c-.6 0-1-.4-1-1V3H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1z"
        clipRule="evenodd"
      />
      <Mask id="file_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20.9 8.6a.523.523 0 01-.1-.15c-.025-.05-.05-.1-.1-.15l-7-7c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM14 4.4L17.6 8H14V4.4zM6 21h12c.6 0 1-.4 1-1V10h-6c-.6 0-1-.4-1-1V3H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#file_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFile;
