import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPause(props: SvgProps) {
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
        d="M6 3h4c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm1 16h2V5H7v14zM18 3h-4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-3 16h2V5h-2v14z"
        clipRule="evenodd"
      />
      <Mask id="pause_svg__a" width={14} height={18} x={5} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 3h4c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm1 16h2V5H7v14zM18 3h-4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-3 16h2V5h-2v14z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#pause_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPause;
