import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMinimize(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="minimize_svg__feather minimize_svg__feather-minimize-2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </Svg>
  );
}

export default SvgMinimize;
