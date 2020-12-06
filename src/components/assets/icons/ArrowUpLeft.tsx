import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowUpLeft(props: SvgProps) {
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
        d="M9.414 8l8.293 8.293a1 1 0 01-1.414 1.414L8 9.414V17a1 1 0 11-2 0V7a.997.997 0 011-1h10a1 1 0 110 2H9.414z"
        clipRule="evenodd"
      />
      <Mask id="arrow-up-left_svg__a" width={12} height={12} x={6} y={6} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M9.414 8l8.293 8.293a1 1 0 01-1.414 1.414L8 9.414V17a1 1 0 11-2 0V7a.997.997 0 011-1h10a1 1 0 110 2H9.414z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-up-left_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowUpLeft;
