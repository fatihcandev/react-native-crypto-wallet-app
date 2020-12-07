import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAlignJustify(props: SvgProps) {
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
        d="M21 5c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18zM3 11h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm19 3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1zm-1 3c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18z"
        clipRule="evenodd"
      />
      <Mask id="align-justify_svg__a" width={20} height={14} x={2} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 5c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18zM3 11h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm19 3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1zm-1 3c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#align-justify_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAlignJustify;
