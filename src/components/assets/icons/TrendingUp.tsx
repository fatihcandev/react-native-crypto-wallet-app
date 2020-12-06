import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgTrendingUp(props: SvgProps) {
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
        d="M24 6v6c0 .6-.4 1-1 1s-1-.4-1-1V8.4l-7.8 7.8c-.4.4-1 .4-1.4 0l-4.3-4.3-6.8 6.8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.5-7.5c.4-.4 1-.4 1.4 0l4.3 4.3L20.6 7H17c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1.2.1.4.3.5.5.1.1.1.3.1.4z"
      />
      <Mask id="trending-up_svg__a" width={24} height={14} x={0} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          d="M24 6v6c0 .6-.4 1-1 1s-1-.4-1-1V8.4l-7.8 7.8c-.4.4-1 .4-1.4 0l-4.3-4.3-6.8 6.8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.5-7.5c.4-.4 1-.4 1.4 0l4.3 4.3L20.6 7H17c-.6 0-1-.4-1-1s.4-1 1-1h6c.1 0 .3 0 .4.1.2.1.4.3.5.5.1.1.1.3.1.4z"
        />
      </Mask>
      <G mask="url(#trending-up_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgTrendingUp;
