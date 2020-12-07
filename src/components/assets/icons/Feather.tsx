import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgFeather(props: SvgProps) {
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
        d="M20.9 3.023c-2.7-2.697-7.2-2.697-9.9 0L4.3 9.815c-.2.2-.3.4-.3.7v8.09l-2.7 2.697c-.4.4-.4.999 0 1.398.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.697h8.1c.3 0 .5-.1.7-.3l6.7-6.791c2.8-2.698 2.8-7.092 0-9.89zm-7.8 14.983H7.4l2-1.998h5.7l-2 1.998zm4-3.996l2.4-2.497c2-1.898 2-5.094.1-7.092-2-1.998-5.1-1.998-7.1 0L6 10.914v5.693l2.3-2.297 7-6.992c.4-.4 1-.4 1.4 0 .4.4.4.999 0 1.398l-5.3 5.294H17.1z"
        clipRule="evenodd"
      />
      <Mask id="feather_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.9 3.023c-2.7-2.697-7.2-2.697-9.9 0L4.3 9.815c-.2.2-.3.4-.3.7v8.09l-2.7 2.697c-.4.4-.4.999 0 1.398.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.697h8.1c.3 0 .5-.1.7-.3l6.7-6.791c2.8-2.698 2.8-7.092 0-9.89zm-7.8 14.983H7.4l2-1.998h5.7l-2 1.998zm4-3.996l2.4-2.497c2-1.898 2-5.094.1-7.092-2-1.998-5.1-1.998-7.1 0L6 10.914v5.693l2.3-2.297 7-6.992c.4-.4 1-.4 1.4 0 .4.4.4.999 0 1.398l-5.3 5.294H17.1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#feather_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgFeather;
