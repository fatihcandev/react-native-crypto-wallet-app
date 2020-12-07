import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowDownLeft(props: SvgProps) {
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
        d="M8 14.586l8.293-8.293a1 1 0 111.414 1.414L9.414 16H17a1 1 0 110 2H7a.997.997 0 01-.703-.289l-.006-.006A.997.997 0 016 17V7a1 1 0 012 0v7.586z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-down-left_svg__a"
        width={12}
        height={12}
        x={6}
        y={6}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M8 14.586l8.293-8.293a1 1 0 111.414 1.414L9.414 16H17a1 1 0 110 2H7a.997.997 0 01-.703-.289l-.006-.006A.997.997 0 016 17V7a1 1 0 012 0v7.586z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-down-left_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowDownLeft;
