import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlus(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="plus_svg__feather plus_svg__feather-plus"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export default SvgPlus;
