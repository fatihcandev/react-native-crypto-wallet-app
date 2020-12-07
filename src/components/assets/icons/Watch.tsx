import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgWatch(props: SvgProps) {
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
        d="M20 12c0-2.3-1-4.3-2.5-5.8l-.3-3.5C17 1.2 15.8 0 14.2 0H9.8C8.3 0 7 1.2 6.8 2.7l-.3 3.5A7.99 7.99 0 004 12c0 2.3 1 4.4 2.5 5.8l.3 3.5c.2 1.5 1.5 2.7 3 2.7h4.3c1.6 0 2.8-1.2 3-2.7l.3-3.4C19 16.4 20 14.3 20 12zM8.8 2.9c0-.5.5-.9 1-.9h4.4c.5 0 .9.4 1 .9l.2 1.8C14.3 4.3 13.2 4 12 4c-1.2 0-2.3.3-3.3.7l.1-1.8zM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.5 0 2.9-.5 3.9-1.4 1.3-1.1 2.1-2.8 2.1-4.6 0-3.3-2.7-6-6-6zm3.2 15.1c0 .5-.5.9-1 .9H9.8c-.5 0-.9-.4-1-.9l-.2-1.8c1 .5 2.1.7 3.3.7 1.2 0 2.3-.3 3.3-.7v1.8zM11 12c0 .3.1.5.3.7l1.5 1.5c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L13 11.6V9c0-.6-.4-1-1-1s-1 .4-1 1v3z"
        clipRule="evenodd"
      />
      <Mask id="watch_svg__a" width={16} height={24} x={4} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 12c0-2.3-1-4.3-2.5-5.8l-.3-3.5C17 1.2 15.8 0 14.2 0H9.8C8.3 0 7 1.2 6.8 2.7l-.3 3.5A7.99 7.99 0 004 12c0 2.3 1 4.4 2.5 5.8l.3 3.5c.2 1.5 1.5 2.7 3 2.7h4.3c1.6 0 2.8-1.2 3-2.7l.3-3.4C19 16.4 20 14.3 20 12zM8.8 2.9c0-.5.5-.9 1-.9h4.4c.5 0 .9.4 1 .9l.2 1.8C14.3 4.3 13.2 4 12 4c-1.2 0-2.3.3-3.3.7l.1-1.8zM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.5 0 2.9-.5 3.9-1.4 1.3-1.1 2.1-2.8 2.1-4.6 0-3.3-2.7-6-6-6zm3.2 15.1c0 .5-.5.9-1 .9H9.8c-.5 0-.9-.4-1-.9l-.2-1.8c1 .5 2.1.7 3.3.7 1.2 0 2.3-.3 3.3-.7v1.8zM11 12c0 .3.1.5.3.7l1.5 1.5c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L13 11.6V9c0-.6-.4-1-1-1s-1 .4-1 1v3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#watch_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgWatch;
