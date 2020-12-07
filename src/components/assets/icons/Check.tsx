import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCheck(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="check_svg__feather check_svg__feather-check"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export default SvgCheck;
