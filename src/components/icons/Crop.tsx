import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCrop(props: SvgProps) {
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
        d="M19 17h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4H8c-1.7 0-3-1.3-3-3l.1-8.9H1c-.5 0-1-.5-1-1s.4-1 1-1h4.1V1c0-.6.5-1 1-1 .6 0 1 .4 1 1v4.1L16 5c1.7 0 3 1.3 3 3v9zM7 16c0 .6.4 1 1 1h9V8c0-.6-.4-1-1-1l-8.9.1L7 16z"
        clipRule="evenodd"
      />
      <Mask id="crop_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19 17h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4H8c-1.7 0-3-1.3-3-3l.1-8.9H1c-.5 0-1-.5-1-1s.4-1 1-1h4.1V1c0-.6.5-1 1-1 .6 0 1 .4 1 1v4.1L16 5c1.7 0 3 1.3 3 3v9zM7 16c0 .6.4 1 1 1h9V8c0-.6-.4-1-1-1l-8.9.1L7 16z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#crop_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCrop;
