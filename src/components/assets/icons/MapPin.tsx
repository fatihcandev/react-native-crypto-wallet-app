import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMapPin(props: SvgProps) {
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
        d="M2 10C2 4.5 6.5 0 12 0s10 4.5 10 10c0 7.4-9.1 13.6-9.4 13.8-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2C11.1 23.6 2 17.4 2 10zm2 0c0 5.4 6.1 10.4 8 11.8 1.9-1.4 8-6.4 8-11.8 0-4.4-3.6-8-8-8s-8 3.6-8 8zm8-4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
        clipRule="evenodd"
      />
      <Mask id="map-pin_svg__a" width={20} height={24} x={2} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M2 10C2 4.5 6.5 0 12 0s10 4.5 10 10c0 7.4-9.1 13.6-9.4 13.8-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2C11.1 23.6 2 17.4 2 10zm2 0c0 5.4 6.1 10.4 8 11.8 1.9-1.4 8-6.4 8-11.8 0-4.4-3.6-8-8-8s-8 3.6-8 8zm8-4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#map-pin_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMapPin;
