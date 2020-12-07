import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgNavigation(props: SvgProps) {
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
        d="M20.602 2.104c.4-.2.8-.1 1.1.199.3.298.4.696.3 1.194l-9 18.906c-.2.398-.5.597-.9.597h-.1c-.4-.1-.8-.398-.9-.796L9.2 14.84l-7.4-1.89C1.3 12.85 1 12.452 1 12.054s.2-.796.6-.995l19.002-8.955zm-9.6 11.642l1.3 5.174 6.6-13.831L5 11.656l5.301 1.393c.3.1.6.299.7.697z"
        clipRule="evenodd"
      />
      <Mask id="navigation_svg__a" width={22} height={21} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.602 2.104c.4-.2.8-.1 1.1.199.3.298.4.696.3 1.194l-9 18.906c-.2.398-.5.597-.9.597h-.1c-.4-.1-.8-.398-.9-.796L9.2 14.84l-7.4-1.89C1.3 12.85 1 12.452 1 12.054s.2-.796.6-.995l19.002-8.955zm-9.6 11.642l1.3 5.174 6.6-13.831L5 11.656l5.301 1.393c.3.1.6.299.7.697z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#navigation_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgNavigation;
