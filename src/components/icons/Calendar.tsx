import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCalendar(props: SvgProps) {
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
        d="M19 3h-2V2c0-.6-.4-1-1-1s-1 .4-1 1v1H9V2c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 3 2 4.3 2 6v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM5 5h2v1c0 .6.4 1 1 1s1-.4 1-1V5h6v1c0 .6.4 1 1 1s1-.4 1-1V5h2c.6 0 1 .4 1 1v3H4V6c0-.6.4-1 1-1zm0 16h14c.6 0 1-.4 1-1v-9H4v9c0 .6.4 1 1 1z"
        clipRule="evenodd"
      />
      <Mask id="calendar_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M19 3h-2V2c0-.6-.4-1-1-1s-1 .4-1 1v1H9V2c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 3 2 4.3 2 6v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM5 5h2v1c0 .6.4 1 1 1s1-.4 1-1V5h6v1c0 .6.4 1 1 1s1-.4 1-1V5h2c.6 0 1 .4 1 1v3H4V6c0-.6.4-1 1-1zm0 16h14c.6 0 1-.4 1-1v-9H4v9c0 .6.4 1 1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#calendar_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCalendar;
