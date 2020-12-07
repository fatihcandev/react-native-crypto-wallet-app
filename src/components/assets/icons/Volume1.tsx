import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVolume1(props: SvgProps) {
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
        d="M14.4 4.109c-.3-.2-.8-.1-1.1.1L8.6 8.007H5c-.6 0-1 .4-1 1v5.996c0 .6.4 1 1 1h3.6l4.7 3.797c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V5.009c.1-.4-.1-.7-.5-.899zM13 16.902l-3.4-2.699c-.2-.1-.4-.2-.6-.2H6v-3.997h3c.2 0 .4-.1.6-.2L13 7.107v9.795zm5.5-.4c.2 0 .5-.1.7-.3 2.4-2.299 2.4-6.096 0-8.495-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 1.6 1.598 1.6 4.097 0 5.696-.4.4-.4 1 0 1.4.2.199.5.299.7.299z"
        clipRule="evenodd"
      />
      <Mask id="volume-1_svg__a" width={17} height={16} x={4} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.4 4.109c-.3-.2-.8-.1-1.1.1L8.6 8.007H5c-.6 0-1 .4-1 1v5.996c0 .6.4 1 1 1h3.6l4.7 3.797c.2.1.4.2.6.2.1 0 .3 0 .4-.1.3-.2.6-.5.6-.9V5.009c.1-.4-.1-.7-.5-.899zM13 16.902l-3.4-2.699c-.2-.1-.4-.2-.6-.2H6v-3.997h3c.2 0 .4-.1.6-.2L13 7.107v9.795zm5.5-.4c.2 0 .5-.1.7-.3 2.4-2.299 2.4-6.096 0-8.495-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 1.6 1.598 1.6 4.097 0 5.696-.4.4-.4 1 0 1.4.2.199.5.299.7.299z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#volume-1_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVolume1;
