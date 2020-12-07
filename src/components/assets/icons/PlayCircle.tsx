import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPlayCircle(props: SvgProps) {
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
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm13.6-.8l-6-4c-.3-.2-.7-.2-1 0-.4.1-.6.4-.6.8v8c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.6-.2l6-4c.3-.2.4-.5.4-.8 0-.3-.2-.6-.4-.8zm-2.4.8L11 9.9v4.2l3.2-2.1z"
        clipRule="evenodd"
      />
      <Mask id="play-circle_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm2 0c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9zm13.6-.8l-6-4c-.3-.2-.7-.2-1 0-.4.1-.6.4-.6.8v8c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.6-.2l6-4c.3-.2.4-.5.4-.8 0-.3-.2-.6-.4-.8zm-2.4.8L11 9.9v4.2l3.2-2.1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#play-circle_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPlayCircle;
