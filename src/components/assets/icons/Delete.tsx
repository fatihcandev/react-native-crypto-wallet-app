import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDelete(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="delete_svg__feather delete_svg__feather-delete"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2zM18 9l-6 6M12 9l6 6" />
    </Svg>
  );
}

export default SvgDelete;
