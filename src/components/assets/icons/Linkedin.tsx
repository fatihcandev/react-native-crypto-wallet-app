import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLinkedin(props: SvgProps) {
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
        d="M4 2C2.3 2 1 3.3 1 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5 13c0-3.9 3.1-7 7-7s7 3.1 7 7v7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-7c0-.6-.4-1-1-1s-1 .4-1 1v7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-7zm10 6h2v-6c0-2.8-2.2-5-5-5s-5 2.2-5 5v6h2v-6c0-1.7 1.3-3 3-3s3 1.3 3 3v6zM2 9c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1H2zm3 12V11H3v10h2zM3 5c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1z"
        clipRule="evenodd"
      />
      <Mask id="linkedin_svg__a" width={22} height={21} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4 2C2.3 2 1 3.3 1 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5 13c0-3.9 3.1-7 7-7s7 3.1 7 7v7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-7c0-.6-.4-1-1-1s-1 .4-1 1v7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-7zm10 6h2v-6c0-2.8-2.2-5-5-5s-5 2.2-5 5v6h2v-6c0-1.7 1.3-3 3-3s3 1.3 3 3v6zM2 9c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1H2zm3 12V11H3v10h2zM3 5c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#linkedin_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLinkedin;
