import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgDelete(props: SvgProps) {
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
        d="M21.003 3H8.017c-.3 0-.6.1-.8.3l-6.992 8c-.3.4-.3.9 0 1.3l6.992 8c.2.3.5.4.8.4h12.986C22.701 21 24 19.7 24 18V6c0-1.7-1.299-3-2.997-3zm1 15c0 .6-.4 1-1 1H8.516l-6.094-7 6.094-7h12.487c.6 0 1 .4 1 1v12zm-5.595-6l2.297-2.3c.4-.4.4-1 0-1.4-.4-.4-.998-.4-1.398 0l-2.298 2.3-2.297-2.3c-.4-.4-1-.4-1.399 0-.4.4-.4 1 0 1.4l2.298 2.3-2.298 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .499-.1.699-.3l2.297-2.3 2.298 2.3c.2.2.4.3.7.3.299 0 .499-.1.698-.3.4-.4.4-1 0-1.4L16.409 12z"
        clipRule="evenodd"
      />
      <Mask id="delete_svg__a" width={24} height={18} x={0} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.003 3H8.017c-.3 0-.6.1-.8.3l-6.992 8c-.3.4-.3.9 0 1.3l6.992 8c.2.3.5.4.8.4h12.986C22.701 21 24 19.7 24 18V6c0-1.7-1.299-3-2.997-3zm1 15c0 .6-.4 1-1 1H8.516l-6.094-7 6.094-7h12.487c.6 0 1 .4 1 1v12zm-5.595-6l2.297-2.3c.4-.4.4-1 0-1.4-.4-.4-.998-.4-1.398 0l-2.298 2.3-2.297-2.3c-.4-.4-1-.4-1.399 0-.4.4-.4 1 0 1.4l2.298 2.3-2.298 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .499-.1.699-.3l2.297-2.3 2.298 2.3c.2.2.4.3.7.3.299 0 .499-.1.698-.3.4-.4.4-1 0-1.4L16.409 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#delete_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgDelete;
