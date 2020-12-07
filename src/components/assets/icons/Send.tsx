import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSend(props: SvgProps) {
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
        d="M23 2.9c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.3a.523.523 0 00-.15-.1c-.05-.025-.1-.05-.15-.1h-.1c-.1 0-.2 0-.3-.1V2c-.1 0-.2 0-.3.1l-20 7c-.4.1-.7.4-.7.9 0 .4.2.8.6 1l8.6 3.8 3.8 8.6c.2.4.5.6.9.6s.8-.3.9-.7l7-20c.2-.1.2-.2.2-.4zm-4.8 2.5l-7.4 7.4-6.1-2.7 13.5-4.7zm-6 8.8l2.7 6.1 4.7-13.5-7.4 7.4z"
        clipRule="evenodd"
      />
      <Mask id="send_svg__a" width={22} height={23} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 2.9c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.3a.523.523 0 00-.15-.1c-.05-.025-.1-.05-.15-.1h-.1c-.1 0-.2 0-.3-.1V2c-.1 0-.2 0-.3.1l-20 7c-.4.1-.7.4-.7.9 0 .4.2.8.6 1l8.6 3.8 3.8 8.6c.2.4.5.6.9.6s.8-.3.9-.7l7-20c.2-.1.2-.2.2-.4zm-4.8 2.5l-7.4 7.4-6.1-2.7 13.5-4.7zm-6 8.8l2.7 6.1 4.7-13.5-7.4 7.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#send_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSend;
