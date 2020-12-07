import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgZapOff(props: SvgProps) {
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
        d="M23 24c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L6.6 8l-4.4 5.3c-.2.3-.3.7-.1 1.1.2.4.5.6.9.6h7.9l-.9 6.9c0 .4.2.8.6 1 .1.1.3.1.4.1.3 0 .6-.1.8-.3l4.3-5.2 6.2 6.2c.2.2.4.3.7.3zM9.9 5.7c-.4-.4-.5-1-.1-1.4l2.4-2.9c.3-.4.8-.5 1.2-.3.4.2.6.6.6 1l-.6 4.8c-.1.5-.5.9-1 .9h-.1c-.5-.1-.9-.6-.9-1.1l.2-1.4-.2.3c-.4.4-1 .4-1.5.1zm5.8 5.3h3.2l-1.1 1.3c-.4.4-.3 1.1.1 1.4.2.2.4.2.6.2.3 0 .6-.1.8-.4l2.4-2.9c.2-.3.3-.7.1-1.1-.1-.3-.4-.5-.8-.5h-5.3c-.6 0-1 .4-1 1s.4 1 1 1zm-4.1 2L8.1 9.5l-3 3.5h6.5zm1.4 1.4l1.6 1.7-2.1 2.7.5-4.4z"
        clipRule="evenodd"
      />
      <Mask id="zap-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 24c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L6.6 8l-4.4 5.3c-.2.3-.3.7-.1 1.1.2.4.5.6.9.6h7.9l-.9 6.9c0 .4.2.8.6 1 .1.1.3.1.4.1.3 0 .6-.1.8-.3l4.3-5.2 6.2 6.2c.2.2.4.3.7.3zM9.9 5.7c-.4-.4-.5-1-.1-1.4l2.4-2.9c.3-.4.8-.5 1.2-.3.4.2.6.6.6 1l-.6 4.8c-.1.5-.5.9-1 .9h-.1c-.5-.1-.9-.6-.9-1.1l.2-1.4-.2.3c-.4.4-1 .4-1.5.1zm5.8 5.3h3.2l-1.1 1.3c-.4.4-.3 1.1.1 1.4.2.2.4.2.6.2.3 0 .6-.1.8-.4l2.4-2.9c.2-.3.3-.7.1-1.1-.1-.3-.4-.5-.8-.5h-5.3c-.6 0-1 .4-1 1s.4 1 1 1zm-4.1 2L8.1 9.5l-3 3.5h6.5zm1.4 1.4l1.6 1.7-2.1 2.7.5-4.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#zap-off_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgZapOff;
