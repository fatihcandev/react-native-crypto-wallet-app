import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgChevronLeft(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M15 18l-6-6 6-6" />
    </Svg>
  );
}

export default SvgChevronLeft;
