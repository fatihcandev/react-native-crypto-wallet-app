import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgZap(props: SvgProps) {
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
        d="M20.992 9c.4 0 .7.2.9.6.199.3.099.7-.1 1l-9.992 12c-.2.3-.5.4-.8.4-.099 0-.299 0-.399-.1-.4-.1-.7-.6-.6-1l.9-6.9H3.008c-.4 0-.7-.2-.9-.5-.199-.4-.099-.8.1-1.1l9.992-12c.3-.4.8-.5 1.199-.3.4.1.7.6.6 1l-.9 6.9h7.893zm-7.993 5.1l-.6 4.6 6.395-7.7H11.9c-.2 0-.5-.1-.7-.3-.1-.2-.2-.5-.2-.8l.5-4.6L5.107 13H12c.3 0 .6.1.8.3.1.2.2.5.2.8z"
        clipRule="evenodd"
      />
      <Mask id="zap_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.992 9c.4 0 .7.2.9.6.199.3.099.7-.1 1l-9.992 12c-.2.3-.5.4-.8.4-.099 0-.299 0-.399-.1-.4-.1-.7-.6-.6-1l.9-6.9H3.008c-.4 0-.7-.2-.9-.5-.199-.4-.099-.8.1-1.1l9.992-12c.3-.4.8-.5 1.199-.3.4.1.7.6.6 1l-.9 6.9h7.893zm-7.993 5.1l-.6 4.6 6.395-7.7H11.9c-.2 0-.5-.1-.7-.3-.1-.2-.2-.5-.2-.8l.5-4.6L5.107 13H12c.3 0 .6.1.8.3.1.2.2.5.2.8z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#zap_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgZap;
