import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

function SvgPlusCircle(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="plus-circle_svg__feather plus-circle_svg__feather-plus-circle"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8v8M8 12h8" />
    </Svg>
  );
}

export default SvgPlusCircle;
