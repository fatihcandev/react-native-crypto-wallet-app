import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowDown(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a1 1 0 00-1 1v11.586l-5.293-5.293a1 1 0 00-1.414 1.414l7 7 .007.007-.008-.008M13 16.586V5a1 1 0 00-1-1"
        clipRule="evenodd"
      />
      <Mask id="arrow-down_svg__a" width={9} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a1 1 0 00-1 1v11.586l-5.293-5.293a1 1 0 00-1.414 1.414l7 7 .007.007-.008-.008M13 16.586V5a1 1 0 00-1-1"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-down_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowDown;
