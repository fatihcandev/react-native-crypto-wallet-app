import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgShield(props: SvgProps) {
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
        d="M12.2 1l8 2c.5.1.8.5.8 1v8c0 6.5-8.2 10.7-8.6 10.9-.1.1-.2.1-.4.1s-.3 0-.4-.1C11.2 22.7 3 18.5 3 12V4c0-.5.3-.9.7-1l8-2h.5zM12 20.9c1.6-1 7-4.4 7-8.9V4.8L12 3 5 4.8V12c0 4.6 5.4 8 7 8.9z"
        clipRule="evenodd"
      />
      <Mask id="shield_svg__a" width={18} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.2 1l8 2c.5.1.8.5.8 1v8c0 6.5-8.2 10.7-8.6 10.9-.1.1-.2.1-.4.1s-.3 0-.4-.1C11.2 22.7 3 18.5 3 12V4c0-.5.3-.9.7-1l8-2h.5zM12 20.9c1.6-1 7-4.4 7-8.9V4.8L12 3 5 4.8V12c0 4.6 5.4 8 7 8.9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#shield_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgShield;
