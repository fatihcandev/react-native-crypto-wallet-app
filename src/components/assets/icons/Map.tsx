import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMap(props: SvgProps) {
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
        d="M22.5 1.15c.3-.2.7-.2 1 0 .3.198.5.497.5.895v15.928c0 .398-.2.697-.5.896l-7 3.982h-.2c-.1.1-.2.1-.3.1-.2 0-.3 0-.5-.1L8 19.068 1.5 22.85c-.3.199-.7.199-1 0-.3-.2-.5-.498-.5-.896V6.027c0-.398.2-.697.4-.896l7-3.982h.2c.2-.1.3-.1.4-.1.1 0 .2 0 .3.1h.1L16 4.932l6.5-3.783zM15 6.623L9 3.638v13.738l6 2.986V6.624zm-13 0l5-2.886v13.638l-5 2.886V6.624zm15 13.638l5-2.886V3.738l-5 2.886v13.638z"
        clipRule="evenodd"
      />
      <Mask id="map_svg__a" width={24} height={22} x={0} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.5 1.15c.3-.2.7-.2 1 0 .3.198.5.497.5.895v15.928c0 .398-.2.697-.5.896l-7 3.982h-.2c-.1.1-.2.1-.3.1-.2 0-.3 0-.5-.1L8 19.068 1.5 22.85c-.3.199-.7.199-1 0-.3-.2-.5-.498-.5-.896V6.027c0-.398.2-.697.4-.896l7-3.982h.2c.2-.1.3-.1.4-.1.1 0 .2 0 .3.1h.1L16 4.932l6.5-3.783zM15 6.623L9 3.638v13.738l6 2.986V6.624zm-13 0l5-2.886v13.638l-5 2.886V6.624zm15 13.638l5-2.886V3.738l-5 2.886v13.638z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#map_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMap;
