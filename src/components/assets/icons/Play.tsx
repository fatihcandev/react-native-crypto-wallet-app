import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPlay(props: SvgProps) {
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
        d="M5.5 2.15l14 9.023c.3.1.5.501.5.802 0 .3-.2.601-.5.802l-14 9.022c-.1.1-.3.201-.5.201s-.3 0-.5-.1c-.3-.2-.5-.502-.5-.902V2.951c0-.4.2-.701.5-.802.3-.2.7-.2 1 0zm11.7 9.825L6 4.757v14.436l11.2-7.218z"
        clipRule="evenodd"
      />
      <Mask id="play_svg__a" width={16} height={20} x={4} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 2.15l14 9.023c.3.1.5.501.5.802 0 .3-.2.601-.5.802l-14 9.022c-.1.1-.3.201-.5.201s-.3 0-.5-.1c-.3-.2-.5-.502-.5-.902V2.951c0-.4.2-.701.5-.802.3-.2.7-.2 1 0zm11.7 9.825L6 4.757v14.436l11.2-7.218z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#play_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPlay;
