import * as React from 'react';
import Svg, { SvgProps, Path, Mask } from 'react-native-svg';

function SvgNeo(props: SvgProps) {
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
        d="M14.155 0L2.385 4.183l7.958 3.823L22.076 3.8 14.155 0zm-.22 7.15v9.562l8.357 3.254V4.15l-8.356 3zM2 20.184l8.03 3.796V8.356L2 4.557v15.628z"
        clipRule="evenodd"
      />
      <Mask id="neo_svg__a" width={21} height={24} x={2} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M14.155 0L2.385 4.183l7.958 3.823L22.076 3.8 14.155 0zm-.22 7.15v9.562l8.357 3.254V4.15l-8.356 3zM2 20.184l8.03 3.796V8.356L2 4.557v15.628z"
          clipRule="evenodd"
        />
      </Mask>
    </Svg>
  );
}

export default SvgNeo;
