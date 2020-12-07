import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgHome(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="home_svg__feather home_svg__feather-home"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <Path d="M9 22V12h6v10" />
    </Svg>
  );
}

export default SvgHome;
