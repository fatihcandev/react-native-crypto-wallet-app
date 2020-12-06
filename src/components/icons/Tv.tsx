import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTv(props: SvgProps) {
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
        d="M14.4 6H20c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h5.6L6.3 2.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 5.6l4.3-4.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L14.4 6zM20 21c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h16z"
        clipRule="evenodd"
      />
      <Mask id="tv_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M14.4 6H20c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h5.6L6.3 2.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 5.6l4.3-4.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L14.4 6zM20 21c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h16z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#tv_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTv;
