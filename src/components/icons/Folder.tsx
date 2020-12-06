import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFolder(props: SvgProps) {
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
        d="M11.5 5H20c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h5c.3 0 .6.2.8.4L11.5 5zM20 20c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-9c-.3 0-.6-.2-.8-.4L8.5 4H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h16z"
        clipRule="evenodd"
      />
      <Mask id="folder_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M11.5 5H20c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h5c.3 0 .6.2.8.4L11.5 5zM20 20c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-9c-.3 0-.6-.2-.8-.4L8.5 4H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h16z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#folder_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFolder;
