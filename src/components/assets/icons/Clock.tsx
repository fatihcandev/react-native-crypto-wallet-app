import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgClock(props: SvgProps) {
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
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm3.7-5.3c.4-.4.4-1 0-1.4L13 11.6V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .3.1.5.3.7l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
        clipRule="evenodd"
      />
      <Mask id="clock_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm3.7-5.3c.4-.4.4-1 0-1.4L13 11.6V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .3.1.5.3.7l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#clock_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgClock;
