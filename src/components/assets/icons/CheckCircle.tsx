import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCheckCircle(props: SvgProps) {
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
        d="M23 12v-.9c0-.6-.4-1-1-1s-1 .4-1 1v.9c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c1.3 0 2.5.3 3.7.8.5.2 1.1 0 1.3-.5.2-.5 0-1.1-.5-1.3-1.4-.7-3-1-4.5-1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11zm-.7-9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-11 11c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3L22.3 2.3z"
        clipRule="evenodd"
      />
      <Mask id="check-circle_svg__a" width={23} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23 12v-.9c0-.6-.4-1-1-1s-1 .4-1 1v.9c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c1.3 0 2.5.3 3.7.8.5.2 1.1 0 1.3-.5.2-.5 0-1.1-.5-1.3-1.4-.7-3-1-4.5-1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11zm-.7-9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-11 11c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3L22.3 2.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#check-circle_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCheckCircle;
