import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVoicemail(props: SvgProps) {
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
        d="M18.5 7c-3 0-5.5 2.5-5.5 5.5 0 1.3.5 2.5 1.3 3.5H9.7c.8-1 1.3-2.2 1.3-3.5C11 9.5 8.5 7 5.5 7S0 9.5 0 12.5 2.5 18 5.5 18h13c3 0 5.5-2.5 5.5-5.5S21.5 7 18.5 7zM2 12.5C2 10.6 3.6 9 5.5 9S9 10.6 9 12.5 7.4 16 5.5 16 2 14.4 2 12.5zm13 0c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5S20.4 9 18.5 9 15 10.6 15 12.5z"
        clipRule="evenodd"
      />
      <Mask id="voicemail_svg__a" width={24} height={11} x={0} y={7} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18.5 7c-3 0-5.5 2.5-5.5 5.5 0 1.3.5 2.5 1.3 3.5H9.7c.8-1 1.3-2.2 1.3-3.5C11 9.5 8.5 7 5.5 7S0 9.5 0 12.5 2.5 18 5.5 18h13c3 0 5.5-2.5 5.5-5.5S21.5 7 18.5 7zM2 12.5C2 10.6 3.6 9 5.5 9S9 10.6 9 12.5 7.4 16 5.5 16 2 14.4 2 12.5zm13 0c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5S20.4 9 18.5 9 15 10.6 15 12.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#voicemail_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVoicemail;
