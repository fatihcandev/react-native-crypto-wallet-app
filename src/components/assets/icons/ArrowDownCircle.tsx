import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArrowDownCircle(props: SvgProps) {
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
        d="M23 12c0 6.1-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1s11 4.9 11 11zm-6.3.7l-4 4c-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3V8c0-.6.4-1 1-1s1 .4 1 1v5.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zM12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"
        clipRule="evenodd"
      />
      <Mask
        id="arrow-down-circle_svg__a"
        width={22}
        height={22}
        x={1}
        y={1}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12c0 6.1-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1s11 4.9 11 11zm-6.3.7l-4 4c-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3V8c0-.6.4-1 1-1s1 .4 1 1v5.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zM12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#arrow-down-circle_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArrowDownCircle;
