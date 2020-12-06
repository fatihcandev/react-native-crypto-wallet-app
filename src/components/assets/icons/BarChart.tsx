import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgBarChart(props: SvgProps) {
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
        d="M18 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1zm-6 6c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V10c0-.6.4-1 1-1zm-7 7c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1v-4z"
        clipRule="evenodd"
      />
      <Mask id="bar-chart_svg__a" width={14} height={18} x={5} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M18 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1zm-6 6c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V10c0-.6.4-1 1-1zm-7 7c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1v-4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#bar-chart_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgBarChart;
