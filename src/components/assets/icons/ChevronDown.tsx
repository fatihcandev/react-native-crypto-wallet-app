import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgChevronDown(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M6 9l6 6 6-6" />
    </Svg>
  );
}

export default SvgChevronDown;
