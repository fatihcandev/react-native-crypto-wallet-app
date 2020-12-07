import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPower(props: SvgProps) {
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
        d="M13.004 12c0 .6-.399 1-.998 1s-.998-.4-.998-1V2c0-.6.4-1 .998-1 .6 0 .998.4.998 1v10zm-.998 11c2.595 0 5.09-1 7.087-2.9 3.892-3.9 3.892-10.3-.1-14.2-.4-.4-.998-.4-1.397 0-.4.4-.4 1 0 1.4 3.094 3.1 3.094 8.2 0 11.3-3.095 3.1-8.185 3.1-11.28 0-3.093-3.1-3.093-8.2 0-11.3.4-.4.4-1 0-1.4-.398-.4-.997-.4-1.396 0-3.893 3.9-3.893 10.3 0 14.2C6.916 22 9.41 23 12.006 23z"
        clipRule="evenodd"
      />
      <Mask id="power_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.004 12c0 .6-.399 1-.998 1s-.998-.4-.998-1V2c0-.6.4-1 .998-1 .6 0 .998.4.998 1v10zm-.998 11c2.595 0 5.09-1 7.087-2.9 3.892-3.9 3.892-10.3-.1-14.2-.4-.4-.998-.4-1.397 0-.4.4-.4 1 0 1.4 3.094 3.1 3.094 8.2 0 11.3-3.095 3.1-8.185 3.1-11.28 0-3.093-3.1-3.093-8.2 0-11.3.4-.4.4-1 0-1.4-.398-.4-.997-.4-1.396 0-3.893 3.9-3.893 10.3 0 14.2C6.916 22 9.41 23 12.006 23z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#power_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPower;
