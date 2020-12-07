import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgMail(props: SvgProps) {
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
        d="M20 3H4C2.3 3 1 4.3 1 6v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM4 5h16c.4 0 .7.2.9.6L12 11.8 3.1 5.6c.2-.4.5-.6.9-.6zM3 18c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7.9l-8.4 5.9c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2L3 7.9V18z"
        clipRule="evenodd"
      />
      <Mask id="mail_svg__a" width={22} height={18} x={1} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 3H4C2.3 3 1 4.3 1 6v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM4 5h16c.4 0 .7.2.9.6L12 11.8 3.1 5.6c.2-.4.5-.6.9-.6zM3 18c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7.9l-8.4 5.9c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2L3 7.9V18z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#mail_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgMail;
