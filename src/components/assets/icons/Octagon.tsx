import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgOctagon(props: SvgProps) {
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
        d="M16.729 1.3l5.873 5.9c.199.1.299.4.398.7v8.2c0 .3-.1.5-.299.7l-5.873 5.9c-.199.2-.398.3-.697.3H7.87c-.299 0-.598-.1-.697-.2l-5.873-5.9c-.2-.2-.299-.4-.299-.7V7.9c0-.3.1-.6.299-.7l5.873-5.9c.1-.2.398-.3.697-.3h8.163c.298 0 .597.1.697.3zM15.633 21l5.276-5.3V8.3L15.733 3H8.267L2.991 8.3v7.4L8.267 21h7.367z"
        clipRule="evenodd"
      />
      <Mask id="octagon_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.729 1.3l5.873 5.9c.199.1.299.4.398.7v8.2c0 .3-.1.5-.299.7l-5.873 5.9c-.199.2-.398.3-.697.3H7.87c-.299 0-.598-.1-.697-.2l-5.873-5.9c-.2-.2-.299-.4-.299-.7V7.9c0-.3.1-.6.299-.7l5.873-5.9c.1-.2.398-.3.697-.3h8.163c.298 0 .597.1.697.3zM15.633 21l5.276-5.3V8.3L15.733 3H8.267L2.991 8.3v7.4L8.267 21h7.367z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#octagon_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgOctagon;
