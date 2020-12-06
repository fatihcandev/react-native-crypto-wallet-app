import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgSliders(props: SvgProps) {
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
        d="M3 3v7c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zm8 9c0-.6.4-1 1-1s1 .4 1 1v9c0 .6-.4 1-1 1s-1-.4-1-1v-9zm9 1c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v9c0 .6.4 1 1 1zM0 14c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1H5v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H1c-.6 0-1-.4-1-1zm15-7h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v4H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm1 9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1h-2v4c0 .6-.4 1-1 1s-1-.4-1-1v-4h-2c-.6 0-1-.4-1-1z"
        clipRule="evenodd"
      />
      <Mask id="sliders_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M3 3v7c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1zm8 9c0-.6.4-1 1-1s1 .4 1 1v9c0 .6-.4 1-1 1s-1-.4-1-1v-9zm9 1c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v9c0 .6.4 1 1 1zM0 14c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1H5v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H1c-.6 0-1-.4-1-1zm15-7h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v4H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm1 9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1h-2v4c0 .6-.4 1-1 1s-1-.4-1-1v-4h-2c-.6 0-1-.4-1-1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#sliders_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgSliders;
