import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgLitecoin(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#0D1F3C"
        fillRule="evenodd"
        d="M8.436 11.996l1.711-6.431h3.712l-1.309 4.928 1.817-.664.015.043-.459 1.725-1.845.674-.78 2.934h6.167l-.633 2.36H6.954l1.008-3.79-1.427.521.472-1.778 1.429-.522zM12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgLitecoin;
