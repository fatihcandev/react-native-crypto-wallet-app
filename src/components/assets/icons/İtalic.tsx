import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function Svgİtalic(props: SvgProps) {
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
        d="M20 4c0 .6-.4 1-1 1h-3.3l-5.2 14H14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3.3l5.3-14H10c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1z"
      />
      <Mask id="italic_svg__a" width={16} height={18} x={4} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          d="M20 4c0 .6-.4 1-1 1h-3.3l-5.2 14H14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3.3l5.3-14H10c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1z"
        />
      </Mask>
      <G mask="url(#italic_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Svgİtalic;
