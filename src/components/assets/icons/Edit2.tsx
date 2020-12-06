import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgEdit2(props: SvgProps) {
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
        d="M16.7 2.3l5 5c.4.4.4 1 0 1.4l-13 13c-.2.2-.4.3-.7.3H3c-.6 0-1-.4-1-1v-5c0-.3.1-.5.3-.7l13-13c.4-.4 1-.4 1.4 0zM4 20h3.6l12-12L16 4.4l-12 12V20z"
        clipRule="evenodd"
      />
      <Mask id="edit-2_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M16.7 2.3l5 5c.4.4.4 1 0 1.4l-13 13c-.2.2-.4.3-.7.3H3c-.6 0-1-.4-1-1v-5c0-.3.1-.5.3-.7l13-13c.4-.4 1-.4 1.4 0zM4 20h3.6l12-12L16 4.4l-12 12V20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#edit-2_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgEdit2;
