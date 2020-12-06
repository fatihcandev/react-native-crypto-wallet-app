import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgUpload(props: SvgProps) {
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
        d="M11 4.379L8.7 6.68c-.4.4-1 .4-1.4 0a.969.969 0 010-1.401l4-4.005c.05-.05.1-.075.15-.1.05-.025.1-.05.15-.1.3-.1.6-.1.8 0 .1 0 .2.1.3.2l4 4.005c.4.4.4 1.001 0 1.401-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L13 4.38v11.613c0 .6-.4 1.001-1 1.001s-1-.4-1-1.001V4.379zm11 15.618v-3.004c0-.6-.4-1.001-1-1.001s-1 .4-1 1.001v3.004c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3.004c0-.6-.4-1.001-1-1.001s-1 .4-1 1.001v3.004C2 21.698 3.3 23 5 23h14c1.7 0 3-1.302 3-3.003z"
        clipRule="evenodd"
      />
      <Mask id="upload_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M11 4.379L8.7 6.68c-.4.4-1 .4-1.4 0a.969.969 0 010-1.401l4-4.005c.05-.05.1-.075.15-.1.05-.025.1-.05.15-.1.3-.1.6-.1.8 0 .1 0 .2.1.3.2l4 4.005c.4.4.4 1.001 0 1.401-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L13 4.38v11.613c0 .6-.4 1.001-1 1.001s-1-.4-1-1.001V4.379zm11 15.618v-3.004c0-.6-.4-1.001-1-1.001s-1 .4-1 1.001v3.004c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-3.004c0-.6-.4-1.001-1-1.001s-1 .4-1 1.001v3.004C2 21.698 3.3 23 5 23h14c1.7 0 3-1.302 3-3.003z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#upload_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgUpload;
