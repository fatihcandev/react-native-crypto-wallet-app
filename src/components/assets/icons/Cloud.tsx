import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCloud(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M18.5 9h.5c3.3 0 5.9 2.7 5.9 6s-2.7 6-6 6h-9c-4.1 0-7.7-2.8-8.7-6.8-.6-2.3-.2-4.7 1-6.8 1.3-2 3.2-3.5 5.6-4.2 2.3-.6 4.7-.2 6.8 1C16.4 5.3 17.8 7 18.5 9zM10 19h9c2.2 0 4-1.7 4-3.9s-1.8-4-4-4h-1.2c-.5 0-.9-.4-1-.8C16 7.1 13.1 5 10 5c-.6 0-1.2.1-1.7.2C6.5 5.6 5 6.7 4 8.4c-1 1.7-1.3 3.5-.8 5.4.8 3 3.6 5.2 6.8 5.2z"
        clipRule="evenodd"
      />
      <Mask id="cloud_svg__a" width={25} height={19} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18.5 9h.5c3.3 0 5.9 2.7 5.9 6s-2.7 6-6 6h-9c-4.1 0-7.7-2.8-8.7-6.8-.6-2.3-.2-4.7 1-6.8 1.3-2 3.2-3.5 5.6-4.2 2.3-.6 4.7-.2 6.8 1C16.4 5.3 17.8 7 18.5 9zM10 19h9c2.2 0 4-1.7 4-3.9s-1.8-4-4-4h-1.2c-.5 0-.9-.4-1-.8C16 7.1 13.1 5 10 5c-.6 0-1.2.1-1.7.2C6.5 5.6 5 6.7 4 8.4c-1 1.7-1.3 3.5-.8 5.4.8 3 3.6 5.2 6.8 5.2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#cloud_svg__a)">
        <Path fill="#347AF0" d="M1 0h24v24H1z" />
      </G>
    </Svg>
  );
}

export default SvgCloud;
