import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowDownRight(props: SvgProps) {
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
        d="M14.586 16L6.293 7.707a1 1 0 011.414-1.414L16 14.586V7a1 1 0 112 0v10a.997.997 0 01-1 1H7a1 1 0 110-2h7.586z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-down-right_svg__a"
        width={12}
        height={12}
        x={6}
        y={6}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.586 16L6.293 7.707a1 1 0 011.414-1.414L16 14.586V7a1 1 0 112 0v10a.997.997 0 01-1 1H7a1 1 0 110-2h7.586z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-down-right_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowDownRight;
