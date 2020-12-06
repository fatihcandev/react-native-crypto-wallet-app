import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSlash(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M19.8 19.8c2-2 3.2-4.7 3.2-7.8 0-6.1-4.9-11-11-11-3 0-5.8 1.2-7.8 3.2S1 9 1 12c0 6.1 4.9 11 11 11 3 0 5.8-1.2 7.8-3.2zM21 12c0 2.1-.7 4.1-2 5.6L6.4 5C7.9 3.7 9.9 3 12 3c5 0 9 4 9 9zM5 6.4C3.7 7.9 3 9.9 3 12c0 5 4 9 9 9 2.1 0 4.1-.8 5.6-2L5 6.4z"
        clipRule="evenodd"
      />
      <Mask id="slash_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19.8 19.8c2-2 3.2-4.7 3.2-7.8 0-6.1-4.9-11-11-11-3 0-5.8 1.2-7.8 3.2S1 9 1 12c0 6.1 4.9 11 11 11 3 0 5.8-1.2 7.8-3.2zM21 12c0 2.1-.7 4.1-2 5.6L6.4 5C7.9 3.7 9.9 3 12 3c5 0 9 4 9 9zM5 6.4C3.7 7.9 3 9.9 3 12c0 5 4 9 9 9 2.1 0 4.1-.8 5.6-2L5 6.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#slash_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSlash;
