import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAlignRight(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="align-right_svg__feather align-right_svg__feather-align-right"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
    </Svg>
  );
}

export default SvgAlignRight;
