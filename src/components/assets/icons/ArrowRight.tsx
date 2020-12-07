import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowRight(props: SvgProps) {
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
        d="M11.293 4.293a1 1 0 000 1.414L16.586 11H5a1 1 0 100 2h11.586l-5.293 5.293a1 1 0 001.414 1.414l7-7 .007-.007a.997.997 0 00.286-.697V12v-.003a.996.996 0 00-.286-.697l-.008-.008m0 0l-6.999-7a1 1 0 00-1.414 0"
        clipRule="evenodd"
      />
      <Mask id="arrow-right_svg__a" width={16} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.293 4.293a1 1 0 000 1.414L16.586 11H5a1 1 0 100 2h11.586l-5.293 5.293a1 1 0 001.414 1.414l7-7 .007-.007a.997.997 0 00.286-.697V12v-.003a.996.996 0 00-.286-.697l-.008-.008m0 0l-6.999-7a1 1 0 00-1.414 0"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-right_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowRight;
