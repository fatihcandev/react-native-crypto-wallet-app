import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBluetooth(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 25"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.7 7.204c.4-.4.4-1 0-1.4l-5.5-5.5c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v8.6l-3.8-3.8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.8 4.8-4.8 4.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.8-3.8v8.6c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l5.5-5.5c.4-.4.4-1 0-1.4l-4.8-4.8 4.8-4.8zm-5.2-3.8l3.1 3.1-3.1 3.1v-6.2zm3.1 14.1l-3.1-3.1v6.2l3.1-3.1z"
        clipRule="evenodd"
      />
      <Mask id="bluetooth_svg__a" width={13} height={25} x={6} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.7 7.204c.4-.4.4-1 0-1.4l-5.5-5.5c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v8.6l-3.8-3.8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.8 4.8-4.8 4.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.8-3.8v8.6c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l5.5-5.5c.4-.4.4-1 0-1.4l-4.8-4.8 4.8-4.8zm-5.2-3.8l3.1 3.1-3.1 3.1v-6.2zm3.1 14.1l-3.1-3.1v6.2l3.1-3.1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#bluetooth_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBluetooth;
