import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAtSign(props: SvgProps) {
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
        d="M4.2 4.2C6.3 2.1 9.1 1 12 1c6.1 0 11 4.9 11 11v1c0 2.2-1.8 4-4 4-1.4 0-2.6-.7-3.3-1.7-.9 1-2.2 1.7-3.7 1.7-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5v1c0 1.1.9 2 2 2s2-.9 2-2v-1c0-5-4-9-9-9-2.4 0-4.7.9-6.4 2.6C3.9 7.3 3 9.6 3 12c0 5 4 9 9 9 2 0 3.9-.7 5.5-1.9.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4-1.9 1.5-4.3 2.3-6.7 2.3-6.1 0-11-4.9-11-11 0-2.9 1.1-5.7 3.2-7.8zM9 12c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"
        clipRule="evenodd"
      />
      <Mask id="at-sign_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.2 4.2C6.3 2.1 9.1 1 12 1c6.1 0 11 4.9 11 11v1c0 2.2-1.8 4-4 4-1.4 0-2.6-.7-3.3-1.7-.9 1-2.2 1.7-3.7 1.7-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5v1c0 1.1.9 2 2 2s2-.9 2-2v-1c0-5-4-9-9-9-2.4 0-4.7.9-6.4 2.6C3.9 7.3 3 9.6 3 12c0 5 4 9 9 9 2 0 3.9-.7 5.5-1.9.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4-1.9 1.5-4.3 2.3-6.7 2.3-6.1 0-11-4.9-11-11 0-2.9 1.1-5.7 3.2-7.8zM9 12c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#at-sign_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAtSign;
