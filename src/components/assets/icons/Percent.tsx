import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPercent(props: SvgProps) {
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
        d="M3 6.5C3 4.6 4.6 3 6.5 3S10 4.6 10 6.5 8.4 10 6.5 10 3 8.4 3 6.5zm16.7-.8l-14 14c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l14-14c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zM6.5 8C5.7 8 5 7.3 5 6.5S5.7 5 6.5 5 8 5.7 8 6.5 7.3 8 6.5 8zM21 17.5c0 1.9-1.6 3.5-3.5 3.5S14 19.4 14 17.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zM17.5 16c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
        clipRule="evenodd"
      />
      <Mask id="percent_svg__a" width={18} height={18} x={3} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 6.5C3 4.6 4.6 3 6.5 3S10 4.6 10 6.5 8.4 10 6.5 10 3 8.4 3 6.5zm16.7-.8l-14 14c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l14-14c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zM6.5 8C5.7 8 5 7.3 5 6.5S5.7 5 6.5 5 8 5.7 8 6.5 7.3 8 6.5 8zM21 17.5c0 1.9-1.6 3.5-3.5 3.5S14 19.4 14 17.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zM17.5 16c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#percent_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPercent;
