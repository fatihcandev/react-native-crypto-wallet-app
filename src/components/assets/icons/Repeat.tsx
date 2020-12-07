import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRepeat(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="repeat_svg__feather repeat_svg__feather-repeat"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M17 1l4 4-4 4" />
      <Path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
      <Path d="M21 13v2a4 4 0 01-4 4H3" />
    </Svg>
  );
}

export default SvgRepeat;
