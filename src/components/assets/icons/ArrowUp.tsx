import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowUp(props: SvgProps) {
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
        d="M11 7.414V19a1 1 0 102 0V7.414l5.293 5.293a1 1 0 001.414-1.414l-7-7m-1.415 0l-7 7a1 1 0 101.415 1.414L11 7.414m.295-3.123A1 1 0 0112 4"
        clipRule="evenodd"
      />
      <Mask id="arrow-up_svg__a" width={16} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 7.414V19a1 1 0 102 0V7.414l5.293 5.293a1 1 0 001.414-1.414l-7-7m-1.415 0l-7 7a1 1 0 101.415 1.414L11 7.414m.295-3.123A1 1 0 0112 4"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-up_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowUp;
