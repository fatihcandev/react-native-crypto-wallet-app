import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgThermometer(props: SvgProps) {
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
        d="M16.287 14.49c.291.275.57.537.792.91 1.69 2.6.994 6-1.591 7.7-.895.6-1.988.9-2.982.9-1.79 0-3.48-.9-4.574-2.4-1.59-2.4-1.093-5.5 1.094-7.3V3.5c0-1.9 1.59-3.5 3.48-3.5 1.888 0 3.48 1.6 3.48 3.5v10.7c.1.102.201.197.3.29zM9.523 20.4c1.094 1.6 3.28 2.1 4.871 1 1.591-1.1 2.088-3.2.995-4.8-.299-.4-.597-.7-.995-1-.198-.2-.397-.5-.397-.8V3.5c0-.8-.696-1.5-1.492-1.5-.795 0-1.49.7-1.59 1.5v11.2c0 .3-.1.6-.398.8-1.59 1.1-2.088 3.3-.994 4.9z"
        clipRule="evenodd"
      />
      <Mask id="thermometer_svg__a" width={11} height={24} x={7} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.287 14.49c.291.275.57.537.792.91 1.69 2.6.994 6-1.591 7.7-.895.6-1.988.9-2.982.9-1.79 0-3.48-.9-4.574-2.4-1.59-2.4-1.093-5.5 1.094-7.3V3.5c0-1.9 1.59-3.5 3.48-3.5 1.888 0 3.48 1.6 3.48 3.5v10.7c.1.102.201.197.3.29zM9.523 20.4c1.094 1.6 3.28 2.1 4.871 1 1.591-1.1 2.088-3.2.995-4.8-.299-.4-.597-.7-.995-1-.198-.2-.397-.5-.397-.8V3.5c0-.8-.696-1.5-1.492-1.5-.795 0-1.49.7-1.59 1.5v11.2c0 .3-.1.6-.398.8-1.59 1.1-2.088 3.3-.994 4.9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#thermometer_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgThermometer;
