import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBriefcase(props: SvgProps) {
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
        d="M20 6h-3V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v1H4C2.3 6 1 7.3 1 9v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zM9 5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V5zm6 15V8H9v12h6zM3 19V9c0-.6.4-1 1-1h3v12H4c-.6 0-1-.4-1-1zm17 1c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-3v12h3z"
        clipRule="evenodd"
      />
      <Mask id="briefcase_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 6h-3V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v1H4C2.3 6 1 7.3 1 9v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zM9 5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V5zm6 15V8H9v12h6zM3 19V9c0-.6.4-1 1-1h3v12H4c-.6 0-1-.4-1-1zm17 1c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-3v12h3z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#briefcase_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBriefcase;
