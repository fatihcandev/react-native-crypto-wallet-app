import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgActivity(props: SvgProps) {
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
        d="M15 22c-.4 0-.8-.3-.9-.7L9 6.2l-2.1 6.2c-.1.3-.5.6-.9.6H2c-.6 0-1-.4-1-1s.4-1 1-1h3.3l2.8-8.3c.1-.4.5-.7.9-.7s.8.3.9.7L15 17.8l2.1-6.2c.1-.4.5-.7.9-.7h4c.6 0 1 .4 1 1s-.4 1-1 1h-3.3l-2.8 8.3c-.1.5-.5.8-.9.8z"
      />
      <Mask id="activity_svg__a" width={22} height={20} x={1} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          d="M15 22c-.4 0-.8-.3-.9-.7L9 6.2l-2.1 6.2c-.1.3-.5.6-.9.6H2c-.6 0-1-.4-1-1s.4-1 1-1h3.3l2.8-8.3c.1-.4.5-.7.9-.7s.8.3.9.7L15 17.8l2.1-6.2c.1-.4.5-.7.9-.7h4c.6 0 1 .4 1 1s-.4 1-1 1h-3.3l-2.8 8.3c-.1.5-.5.8-.9.8z"
        />
      </Mask>
      <G mask="url(#activity_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgActivity;
