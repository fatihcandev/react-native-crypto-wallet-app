import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTrendingDown(props: SvgProps) {
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
        d="M24 18c0 .1 0 .3-.1.4-.1.2-.3.4-.5.5-.1.1-.3.1-.4.1h-6c-.6 0-1-.4-1-1s.4-1 1-1h3.6l-7.1-7.1-4.3 4.3c-.4.4-1 .4-1.4 0L.3 6.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.8 6.8 4.3-4.3c.4-.4 1-.4 1.4 0l7.8 7.8V12c0-.6.4-1 1-1s1 .4 1 1v6z"
      />
      <Mask id="trending-down_svg__a" width={24} height={14} x={0} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          d="M24 18c0 .1 0 .3-.1.4-.1.2-.3.4-.5.5-.1.1-.3.1-.4.1h-6c-.6 0-1-.4-1-1s.4-1 1-1h3.6l-7.1-7.1-4.3 4.3c-.4.4-1 .4-1.4 0L.3 6.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.8 6.8 4.3-4.3c.4-.4 1-.4 1.4 0l7.8 7.8V12c0-.6.4-1 1-1s1 .4 1 1v6z"
        />
      </Mask>
      <G mask="url(#trending-down_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTrendingDown;
