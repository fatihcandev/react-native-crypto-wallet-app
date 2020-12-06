import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBack(props: SvgProps) {
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
        fill="#0D1F3C"
        fillRule="evenodd"
        d="M15.707 17.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L10.414 12l5.293 5.293z"
        clipRule="evenodd"
      />
      <Mask id="back_svg__a" width={8} height={14} x={8} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M15.707 17.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L10.414 12l5.293 5.293z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#back_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBack;
