import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgRejected(props: SvgProps) {
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
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-6.214 4.786a.69.69 0 000-1L13 12l3.786-3.786a.69.69 0 000-1 .69.69 0 00-1 0L12 11 8.214 7.214a.69.69 0 00-1 0 .69.69 0 000 1L11 12l-3.786 3.786a.69.69 0 000 1 .648.648 0 00.5.214.648.648 0 00.5-.214L12 13l3.786 3.786a.648.648 0 00.5.214.648.648 0 00.5-.214z"
        clipRule="evenodd"
      />
      <Mask id="rejected_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-6.214 4.786a.69.69 0 000-1L13 12l3.786-3.786a.69.69 0 000-1 .69.69 0 00-1 0L12 11 8.214 7.214a.69.69 0 00-1 0 .69.69 0 000 1L11 12l-3.786 3.786a.69.69 0 000 1 .648.648 0 00.5.214.648.648 0 00.5-.214L12 13l3.786 3.786a.648.648 0 00.5.214.648.648 0 00.5-.214z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#rejected_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgRejected;
