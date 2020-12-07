import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPieChart(props: SvgProps) {
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
        d="M23 12c0 .6-.4 1-1 1H11.997c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1A10.97 10.97 0 0123 12zm-.9 4.3c-1.7 4.2-5.802 6.7-10.103 6.7-1.4 0-2.9-.3-4.301-.9-5.602-2.4-8.203-8.8-5.802-14.4 1.1-2.6 3.101-4.7 5.702-5.8.5-.2 1.1 0 1.3.5.2.5 0 1.1-.5 1.3-2.1 1-3.801 2.7-4.701 4.8-1.9 4.6.2 9.9 4.801 11.8 4.601 1.9 9.903-.2 11.803-4.8.2-.5.8-.7 1.3-.5.5.2.7.8.5 1.3zM12.997 3.1c4.101.4 7.402 3.7 7.902 7.9h-7.902V3.1z"
        clipRule="evenodd"
      />
      <Mask id="pie-chart_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12c0 .6-.4 1-1 1H11.997c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1A10.97 10.97 0 0123 12zm-.9 4.3c-1.7 4.2-5.802 6.7-10.103 6.7-1.4 0-2.9-.3-4.301-.9-5.602-2.4-8.203-8.8-5.802-14.4 1.1-2.6 3.101-4.7 5.702-5.8.5-.2 1.1 0 1.3.5.2.5 0 1.1-.5 1.3-2.1 1-3.801 2.7-4.701 4.8-1.9 4.6.2 9.9 4.801 11.8 4.601 1.9 9.903-.2 11.803-4.8.2-.5.8-.7 1.3-.5.5.2.7.8.5 1.3zM12.997 3.1c4.101.4 7.402 3.7 7.902 7.9h-7.902V3.1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#pie-chart_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPieChart;
