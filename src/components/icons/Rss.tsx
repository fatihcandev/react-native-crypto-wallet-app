import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgRss(props: SvgProps) {
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
        d="M4 3c-.6 0-1 .4-1 1s.4 1 1 1c8.3 0 15 6.7 15 15 0 .6.4 1 1 1s1-.4 1-1c0-9.4-7.6-17-17-17zm10 17c0 .6-.4 1-1 1s-1-.4-1-1c0-4.4-3.6-8-8-8-.6 0-1-.4-1-1s.4-1 1-1c5.5 0 10 4.5 10 10zM3 19c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
        clipRule="evenodd"
      />
      <Mask id="rss_svg__a" width={18} height={18} x={3} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4 3c-.6 0-1 .4-1 1s.4 1 1 1c8.3 0 15 6.7 15 15 0 .6.4 1 1 1s1-.4 1-1c0-9.4-7.6-17-17-17zm10 17c0 .6-.4 1-1 1s-1-.4-1-1c0-4.4-3.6-8-8-8-.6 0-1-.4-1-1s.4-1 1-1c5.5 0 10 4.5 10 10zM3 19c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#rss_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgRss;
