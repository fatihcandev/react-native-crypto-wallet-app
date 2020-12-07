import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTruck(props: SvgProps) {
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
        d="M23.7 10.3l-3-3c-.2-.2-.4-.3-.7-.3h-3V3c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h1.4c-.3.5-.4 1-.4 1.5C2 20.4 3.6 22 5.5 22S9 20.4 9 18.5c0-.5-.1-1-.4-1.5h6.7c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-.5-.1-1-.4-1.5H23c.6 0 1-.4 1-1v-5c0-.3-.1-.5-.3-.7zM2 4h13v11H2V4zm3.5 16c.8 0 1.5-.7 1.5-1.5S6.3 17 5.5 17 4 17.7 4 18.5 4.7 20 5.5 20zM20 18.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM17 15h5v-3.6L19.6 9H17v6z"
        clipRule="evenodd"
      />
      <Mask id="truck_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23.7 10.3l-3-3c-.2-.2-.4-.3-.7-.3h-3V3c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h1.4c-.3.5-.4 1-.4 1.5C2 20.4 3.6 22 5.5 22S9 20.4 9 18.5c0-.5-.1-1-.4-1.5h6.7c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-.5-.1-1-.4-1.5H23c.6 0 1-.4 1-1v-5c0-.3-.1-.5-.3-.7zM2 4h13v11H2V4zm3.5 16c.8 0 1.5-.7 1.5-1.5S6.3 17 5.5 17 4 17.7 4 18.5 4.7 20 5.5 20zM20 18.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM17 15h5v-3.6L19.6 9H17v6z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#truck_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTruck;
