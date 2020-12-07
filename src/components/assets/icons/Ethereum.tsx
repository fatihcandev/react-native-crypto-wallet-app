import * as React from 'react';
import Svg, { SvgProps, Path, Mask } from 'react-native-svg';

function SvgEthereum(props: SvgProps) {
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
        d="M5 12.22l7.365 4.353 7.364-4.353L12.365 0 5 12.22zm7.365 11.775L5 13.615l7.365 4.352 7.369-4.351-7.37 10.378z"
        clipRule="evenodd"
      />
      <Mask id="ethereum_svg__a" width={15} height={24} x={5} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5 12.22l7.365 4.353 7.364-4.353L12.365 0 5 12.22zm7.365 11.775L5 13.615l7.365 4.352 7.369-4.351-7.37 10.378z"
          clipRule="evenodd"
        />
      </Mask>
    </Svg>
  );
}

export default SvgEthereum;
