import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSkipForward(props: SvgProps) {
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
        d="M5.6 3.209c-.3-.2-.7-.3-1-.1-.4.2-.6.5-.6.9V20c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .4-.1.6-.2l10-7.996c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.8L5.6 3.21zM6 6.107l7.4 5.897L6 17.902V6.107zM19 20c.6 0 1-.4 1-.999V5.008c0-.6-.4-1-1-1s-1 .4-1 1v13.993c0 .6.4 1 1 1z"
        clipRule="evenodd"
      />
      <Mask id="skip-forward_svg__a" width={16} height={18} x={4} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.6 3.209c-.3-.2-.7-.3-1-.1-.4.2-.6.5-.6.9V20c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .4-.1.6-.2l10-7.996c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.8L5.6 3.21zM6 6.107l7.4 5.897L6 17.902V6.107zM19 20c.6 0 1-.4 1-.999V5.008c0-.6-.4-1-1-1s-1 .4-1 1v13.993c0 .6.4 1 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#skip-forward_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSkipForward;
