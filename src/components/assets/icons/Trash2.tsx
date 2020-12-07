import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTrash2(props: SvgProps) {
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
        d="M21 5h-4V4c0-1.7-1.3-3-3-3h-4C8.3 1 7 2.3 7 4v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7h1c.6 0 1-.4 1-1s-.4-1-1-1zM9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V4zm8 17c.6 0 1-.4 1-1V7H6v13c0 .6.4 1 1 1h10zm-6-10v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1zm4 6v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1z"
        clipRule="evenodd"
      />
      <Mask id="trash-2_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 5h-4V4c0-1.7-1.3-3-3-3h-4C8.3 1 7 2.3 7 4v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7h1c.6 0 1-.4 1-1s-.4-1-1-1zM9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V4zm8 17c.6 0 1-.4 1-1V7H6v13c0 .6.4 1 1 1h10zm-6-10v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1zm4 6v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#trash-2_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTrash2;
