import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgArrowRight(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
}

export default SvgArrowRight;
