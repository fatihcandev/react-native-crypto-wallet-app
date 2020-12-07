import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function Svgİmage(props: SvgProps) {
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
        d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7.6l-3.3-3.3c-.4-.4-1-.4-1.4 0L4.7 19.9c-.4-.1-.7-.5-.7-.9V5zm3.4 15H19c.6 0 1-.4 1-1v-3.6l-4-4L7.4 20zm1.1-9C9.9 11 11 9.9 11 8.5S9.9 6 8.5 6 6 7.1 6 8.5 7.1 11 8.5 11zM9 8.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5z"
        clipRule="evenodd"
      />
      <Mask id="image_svg__a" width={20} height={20} x={2} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7.6l-3.3-3.3c-.4-.4-1-.4-1.4 0L4.7 19.9c-.4-.1-.7-.5-.7-.9V5zm3.4 15H19c.6 0 1-.4 1-1v-3.6l-4-4L7.4 20zm1.1-9C9.9 11 11 9.9 11 8.5S9.9 6 8.5 6 6 7.1 6 8.5 7.1 11 8.5 11zM9 8.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#image_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default Svgİmage;
