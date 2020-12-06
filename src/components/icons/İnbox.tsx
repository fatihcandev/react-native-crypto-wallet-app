import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function Svgİnbox(props: SvgProps) {
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
        d="M22.9 12.6l-3.5-7.8C19 3.7 17.9 3 16.7 3H7.3C6.1 3 5 3.7 4.6 4.8l-3.5 7.8c-.1.1-.1.3-.1.4v5c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-5c0-.1 0-.3-.1-.4zm-16.5-7c.1-.4.5-.6.9-.6h9.4c.4 0 .8.2.9.6l2.8 6.4H16c-.3 0-.6.2-.8.4L13.5 15h-2.9l-1.7-2.6c-.3-.2-.6-.4-.9-.4H3.5l2.9-6.4zM4 19h16c.6 0 1-.4 1-1v-4h-4.5l-1.7 2.6c-.2.2-.5.4-.8.4h-4c-.3 0-.6-.2-.8-.4L7.5 14H3v4c0 .6.4 1 1 1z"
        clipRule="evenodd"
      />
      <Mask id="inbox_svg__a" width={22} height={18} x={1} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M22.9 12.6l-3.5-7.8C19 3.7 17.9 3 16.7 3H7.3C6.1 3 5 3.7 4.6 4.8l-3.5 7.8c-.1.1-.1.3-.1.4v5c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-5c0-.1 0-.3-.1-.4zm-16.5-7c.1-.4.5-.6.9-.6h9.4c.4 0 .8.2.9.6l2.8 6.4H16c-.3 0-.6.2-.8.4L13.5 15h-2.9l-1.7-2.6c-.3-.2-.6-.4-.9-.4H3.5l2.9-6.4zM4 19h16c.6 0 1-.4 1-1v-4h-4.5l-1.7 2.6c-.2.2-.5.4-.8.4h-4c-.3 0-.6-.2-.8-.4L7.5 14H3v4c0 .6.4 1 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#inbox_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Svgİnbox;
