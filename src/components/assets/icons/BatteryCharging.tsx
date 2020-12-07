import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBatteryCharging(props: SvgProps) {
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
        d="M5 19c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h3.2c.6 0 1-.4 1-1s-.4-1-1-1H3C1.3 5 0 6.3 0 8v8c0 1.7 1.3 3 3 3h2zM15 5h2c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3h-3.2c-.6 0-1-.4-1-1s.4-1 1-1H17c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-2c-.6 0-1-.4-1-1s.4-1 1-1zm8 5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm-10 1c.4 0 .7.2.9.5.2.4.1.7-.1 1.1l-4 6c-.2.2-.5.4-.8.4-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l3-4.4H7c-.4 0-.7-.2-.8-.5-.2-.3-.2-.7 0-1l4-6c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-3 4.4H13z"
        clipRule="evenodd"
      />
      <Mask
        id="battery-charging_svg__a"
        width={24}
        height={14}
        x={0}
        y={5}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 19c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h3.2c.6 0 1-.4 1-1s-.4-1-1-1H3C1.3 5 0 6.3 0 8v8c0 1.7 1.3 3 3 3h2zM15 5h2c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3h-3.2c-.6 0-1-.4-1-1s.4-1 1-1H17c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-2c-.6 0-1-.4-1-1s.4-1 1-1zm8 5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm-10 1c.4 0 .7.2.9.5.2.4.1.7-.1 1.1l-4 6c-.2.2-.5.4-.8.4-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l3-4.4H7c-.4 0-.7-.2-.8-.5-.2-.3-.2-.7 0-1l4-6c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-3 4.4H13z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#battery-charging_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBatteryCharging;
