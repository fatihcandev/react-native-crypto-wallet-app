import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSkipBack(props: SvgProps) {
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
        d="M19.4 3.109c-.3-.2-.8-.1-1.1.1l-10 7.996c-.2.2-.3.5-.3.8 0 .3.1.6.4.8l10 7.995c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V4.01c0-.4-.2-.7-.6-.9zM18 17.902l-7.4-5.898L18 6.107v11.795zM6 19V5.008c0-.6-.4-1-1-1s-1 .4-1 1v13.993c0 .6.4 1 1 1s1-.4 1-1z"
        clipRule="evenodd"
      />
      <Mask id="skip-back_svg__a" width={16} height={18} x={4} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.4 3.109c-.3-.2-.8-.1-1.1.1l-10 7.996c-.2.2-.3.5-.3.8 0 .3.1.6.4.8l10 7.995c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V4.01c0-.4-.2-.7-.6-.9zM18 17.902l-7.4-5.898L18 6.107v11.795zM6 19V5.008c0-.6-.4-1-1-1s-1 .4-1 1v13.993c0 .6.4 1 1 1s1-.4 1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#skip-back_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSkipBack;
