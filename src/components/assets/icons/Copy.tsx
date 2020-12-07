import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function SvgCopy(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="copy_svg__feather copy_svg__feather-copy"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
      <Path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </Svg>
  );
}

export default SvgCopy;
