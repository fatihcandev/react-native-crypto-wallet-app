import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFilter(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="filter_svg__feather filter_svg__feather-filter"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </Svg>
  );
}

export default SvgFilter;
