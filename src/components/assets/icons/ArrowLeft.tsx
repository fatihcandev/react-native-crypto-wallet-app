import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowLeft(props: SvgProps) {
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
        d="M7.414 11H19a1 1 0 110 2H7.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7m0-1.415l7-7a1 1 0 111.414 1.415L7.414 11m-3.123 1.705a.997.997 0 01-.215-.322l.215.322zm-.215-.322a.997.997 0 01.215-1.088"
        clipRule="evenodd"
      />
      <Mask id="arrow-left_svg__a" width={16} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.414 11H19a1 1 0 110 2H7.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7m0-1.415l7-7a1 1 0 111.414 1.415L7.414 11m-3.123 1.705a.997.997 0 01-.215-.322l.215.322zm-.215-.322a.997.997 0 01.215-1.088"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-left_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowLeft;
