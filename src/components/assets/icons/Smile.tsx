import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSmile(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className="smile_svg__w-6 smile_svg__h-6"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
}

export default SvgSmile;
