import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgShuffle(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="shuffle_svg__feather shuffle_svg__feather-shuffle"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
    </Svg>
  );
}

export default SvgShuffle;
