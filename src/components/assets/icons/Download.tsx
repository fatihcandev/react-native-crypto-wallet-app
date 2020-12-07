import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgDownload(props: SvgProps) {
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
        d="M11.6 16.9c-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3V2c0-.6.4-1 1-1s1 .4 1 1v11.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1zM22 20v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3z"
        clipRule="evenodd"
      />
      <Mask id="download_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.6 16.9c-.1 0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3V2c0-.6.4-1 1-1s1 .4 1 1v11.6l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1zM22 20v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#download_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgDownload;
