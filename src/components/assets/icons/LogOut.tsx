import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLogOut(props: SvgProps) {
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
        d="M10.01 23c.6 0 1.001-.4 1.001-1s-.4-1-1.001-1H5.004c-.601 0-1.001-.4-1.001-1V4c0-.6.4-1 1-1h5.007c.6 0 1.001-.4 1.001-1s-.4-1-1.001-1H5.004C3.302 1 2 2.3 2 4v16c0 1.7 1.302 3 3.004 3h5.006zm11.915-11.4c.1.3.1.6 0 .8 0 .1-.1.2-.2.3l-4.005 4c-.2.2-.501.3-.701.3-.2 0-.5-.1-.701-.3-.4-.4-.4-1 0-1.4L18.62 13H9.009c-.601 0-1.001-.4-1.001-1s.4-1 1-1h9.613l-2.303-2.3c-.4-.4-.4-1 0-1.4.4-.4 1.001-.4 1.402 0l4.005 4c.05.05.075.1.1.15.025.05.05.1.1.15z"
        clipRule="evenodd"
      />
      <Mask id="log-out_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.01 23c.6 0 1.001-.4 1.001-1s-.4-1-1.001-1H5.004c-.601 0-1.001-.4-1.001-1V4c0-.6.4-1 1-1h5.007c.6 0 1.001-.4 1.001-1s-.4-1-1.001-1H5.004C3.302 1 2 2.3 2 4v16c0 1.7 1.302 3 3.004 3h5.006zm11.915-11.4c.1.3.1.6 0 .8 0 .1-.1.2-.2.3l-4.005 4c-.2.2-.501.3-.701.3-.2 0-.5-.1-.701-.3-.4-.4-.4-1 0-1.4L18.62 13H9.009c-.601 0-1.001-.4-1.001-1s.4-1 1-1h9.613l-2.303-2.3c-.4-.4-.4-1 0-1.4.4-.4 1.001-.4 1.402 0l4.005 4c.05.05.075.1.1.15.025.05.05.1.1.15z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#log-out_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLogOut;
