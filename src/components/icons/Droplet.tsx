import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgDroplet(props: SvgProps) {
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
        d="M12.7 1.3l5.7 5.6c3.5 3.6 3.5 9.3 0 12.8-1.7 1.7-4 2.6-6.4 2.6-2.4 0-4.7-.9-6.4-2.6C3.9 18 3 15.7 3 13.3c0-2.4.9-4.7 2.7-6.4l5.6-5.6c.2-.2.4-.3.7-.3.3 0 .5.1.7.3zm-.7 19c1.9 0 3.6-.7 5-2 2.7-2.8 2.7-7.2-.1-9.9l-5-5-4.9 5c-1.3 1.3-2 3-2 4.9 0 1.9.7 3.6 2.1 5 1.3 1.3 3 2 4.9 2z"
        clipRule="evenodd"
      />
      <Mask id="droplet_svg__a" width={19} height={22} x={3} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12.7 1.3l5.7 5.6c3.5 3.6 3.5 9.3 0 12.8-1.7 1.7-4 2.6-6.4 2.6-2.4 0-4.7-.9-6.4-2.6C3.9 18 3 15.7 3 13.3c0-2.4.9-4.7 2.7-6.4l5.6-5.6c.2-.2.4-.3.7-.3.3 0 .5.1.7.3zm-.7 19c1.9 0 3.6-.7 5-2 2.7-2.8 2.7-7.2-.1-9.9l-5-5-4.9 5c-1.3 1.3-2 3-2 4.9 0 1.9.7 3.6 2.1 5 1.3 1.3 3 2 4.9 2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#droplet_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgDroplet;
