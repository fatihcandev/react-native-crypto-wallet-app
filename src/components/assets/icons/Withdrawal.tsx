import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgWithdrawal(props: SvgProps) {
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
        fill="#DF5060"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M10.276 9.333l5.529 5.529a.667.667 0 11-.943.943l-5.529-5.529v5.057a.667.667 0 11-1.333 0V8.667a.665.665 0 01.194-.47l.001-.002.002-.001A.665.665 0 018.667 8h6.666a.667.667 0 110 1.333h-5.057z"
        clipRule="evenodd"
      />
      <Mask id="withdrawal_svg__a" width={8} height={8} x={8} y={8} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M10.276 9.333l5.529 5.529a.667.667 0 11-.943.943l-5.529-5.529v5.057a.667.667 0 11-1.333 0V8.667a.665.665 0 01.194-.47l.001-.002.002-.001A.665.665 0 018.667 8h6.666a.667.667 0 110 1.333h-5.057z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#withdrawal_svg__a)">
        <Path fill="#fff" d="M4 4h16v16H4z" />
      </G>
    </Svg>
  );
}

export default SvgWithdrawal;
