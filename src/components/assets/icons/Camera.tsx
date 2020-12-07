import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCamera(props: SvgProps) {
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
        d="M17.5 5H21c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h3.5l1.7-2.6c.2-.2.5-.4.8-.4h6c.3 0 .6.2.8.4L17.5 5zM21 20c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-4c-.3 0-.6-.2-.9-.4L14.4 4H9.5L7.8 6.6c-.2.2-.5.4-.8.4H3c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h18zM12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-3 5c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"
        clipRule="evenodd"
      />
      <Mask id="camera_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 5H21c1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h3.5l1.7-2.6c.2-.2.5-.4.8-.4h6c.3 0 .6.2.8.4L17.5 5zM21 20c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-4c-.3 0-.6-.2-.9-.4L14.4 4H9.5L7.8 6.6c-.2.2-.5.4-.8.4H3c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h18zM12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-3 5c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#camera_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCamera;
