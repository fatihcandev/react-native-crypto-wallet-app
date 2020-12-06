import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgEdit3(props: SvgProps) {
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
        d="M3 18h4c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1zm1-4.6l10-10L16.6 6l-10 10H4v-2.6zM21 23c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18z"
        clipRule="evenodd"
      />
      <Mask id="edit-3_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M3 18h4c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1zm1-4.6l10-10L16.6 6l-10 10H4v-2.6zM21 23c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h18z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#edit-3_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgEdit3;
