import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBold(props: SvgProps) {
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
        d="M17.4 11.6c1-.9 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h9c2.8 0 5-2.2 5-5 0-1.9-1.1-3.5-2.6-4.4zM7 5h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H7V5zm0 14h8c1.7 0 3-1.3 3-3s-1.3-3-3-3H7v6z"
        clipRule="evenodd"
      />
      <Mask id="bold_svg__a" width={15} height={18} x={5} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.4 11.6c1-.9 1.6-2.2 1.6-3.6 0-2.8-2.2-5-5-5H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h9c2.8 0 5-2.2 5-5 0-1.9-1.1-3.5-2.6-4.4zM7 5h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H7V5zm0 14h8c1.7 0 3-1.3 3-3s-1.3-3-3-3H7v6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#bold_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBold;
