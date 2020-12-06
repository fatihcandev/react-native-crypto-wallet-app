import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgShieldOff(props: SvgProps) {
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
        d="M23.7 23.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L17.6 19c-1.5 1.5-3.2 2.8-5.2 3.8-.1.2-.2.2-.4.2s-.3 0-.4-.1C11.2 22.7 3 18.5 3 12V5c0-.1.025-.175.05-.25a.74.74 0 00.05-.25L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4zM7.9 3.5c-.2-.5.1-1.1.6-1.3L11.7 1c.2-.1.5-.1.7 0l8 3c.3.2.6.6.6 1v7c0 .8-.1 1.6-.4 2.3-.1.4-.5.7-1 .7h-.3c-.5-.2-.8-.7-.7-1.2.2-.6.3-1.1.3-1.7V5.7l-7-2.6-2.8 1c-.4.2-1-.1-1.2-.6zM5 6.4l11.2 11.2C15 18.9 13.6 20 12 20.9c-1.6-1-7-4.4-7-8.9V6.4z"
        clipRule="evenodd"
      />
      <Mask id="shield-off_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23.7 23.7c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L17.6 19c-1.5 1.5-3.2 2.8-5.2 3.8-.1.2-.2.2-.4.2s-.3 0-.4-.1C11.2 22.7 3 18.5 3 12V5c0-.1.025-.175.05-.25a.74.74 0 00.05-.25L.3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4zM7.9 3.5c-.2-.5.1-1.1.6-1.3L11.7 1c.2-.1.5-.1.7 0l8 3c.3.2.6.6.6 1v7c0 .8-.1 1.6-.4 2.3-.1.4-.5.7-1 .7h-.3c-.5-.2-.8-.7-.7-1.2.2-.6.3-1.1.3-1.7V5.7l-7-2.6-2.8 1c-.4.2-1-.1-1.2-.6zM5 6.4l11.2 11.2C15 18.9 13.6 20 12 20.9c-1.6-1-7-4.4-7-8.9V6.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#shield-off_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgShieldOff;
