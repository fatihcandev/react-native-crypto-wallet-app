import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFileMinus(props: SvgProps) {
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
        d="M20.8 7.45c.025.05.05.1.1.15.1.1.1.3.1.4v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h8c.1 0 .3 0 .4.1.1 0 .2.1.3.2l6 6c.05.05.075.1.1.15zM17.6 7L15 4.4V7h2.6zm.4 14H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-3-5c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1h6z"
        clipRule="evenodd"
      />
      <Mask id="file-minus_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.8 7.45c.025.05.05.1.1.15.1.1.1.3.1.4v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h8c.1 0 .3 0 .4.1.1 0 .2.1.3.2l6 6c.05.05.075.1.1.15zM17.6 7L15 4.4V7h2.6zm.4 14H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-3-5c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1h6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#file-minus_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFileMinus;
