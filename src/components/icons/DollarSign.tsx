import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgDollarSign(props: SvgProps) {
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
        fill="#000"
        fillRule="evenodd"
        d="M14.5 11H13V6h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V1c0-.6-.4-1-1-1s-1 .4-1 1v3H9.5C7 4 5 6 5 8.5S7 13 9.5 13H11v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v3c0 .6.4 1 1 1s1-.4 1-1v-3h1.5c2.5 0 4.5-2 4.5-4.5S17 11 14.5 11zm-5 0C8.1 11 7 9.9 7 8.5S8.1 6 9.5 6H11v5H9.5zm3.5 7h1.5c1.4 0 2.5-1.1 2.5-2.5S15.9 13 14.5 13H13v5z"
        clipRule="evenodd"
      />
      <Mask id="dollar-sign_svg__a" width={14} height={24} x={5} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M14.5 11H13V6h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V1c0-.6-.4-1-1-1s-1 .4-1 1v3H9.5C7 4 5 6 5 8.5S7 13 9.5 13H11v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v3c0 .6.4 1 1 1s1-.4 1-1v-3h1.5c2.5 0 4.5-2 4.5-4.5S17 11 14.5 11zm-5 0C8.1 11 7 9.9 7 8.5S8.1 6 9.5 6H11v5H9.5zm3.5 7h1.5c1.4 0 2.5-1.1 2.5-2.5S15.9 13 14.5 13H13v5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#dollar-sign_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgDollarSign;
