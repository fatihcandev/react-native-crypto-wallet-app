import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgX(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="x_svg__feather x_svg__feather-x"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export default SvgX;
