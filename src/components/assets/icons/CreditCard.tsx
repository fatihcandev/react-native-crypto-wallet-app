import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCreditCard(props: SvgProps) {
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
        d="M21 3H3C1.3 3 0 4.3 0 6v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM3 5h18c.6 0 1 .4 1 1v3H2V6c0-.6.4-1 1-1zm0 14h18c.6 0 1-.4 1-1v-7H2v7c0 .6.4 1 1 1z"
        clipRule="evenodd"
      />
      <Mask id="credit-card_svg__a" width={24} height={18} x={0} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 3H3C1.3 3 0 4.3 0 6v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM3 5h18c.6 0 1 .4 1 1v3H2V6c0-.6.4-1 1-1zm0 14h18c.6 0 1-.4 1-1v-7H2v7c0 .6.4 1 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#credit-card_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCreditCard;
