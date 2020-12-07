import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLogOut(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="log-out_svg__feather log-out_svg__feather-log-out"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </Svg>
  );
}

export default SvgLogOut;
