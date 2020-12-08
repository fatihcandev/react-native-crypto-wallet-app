import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

function SvgArrowDownRightCircle(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      rotation={45}
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16l4-4-4-4M8 12h8" />
    </Svg>
  );
}

export default SvgArrowDownRightCircle;
