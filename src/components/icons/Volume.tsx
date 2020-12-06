import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgVolume(props: SvgProps) {
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
        d="M15.512 4.209c.275-.2.732-.3 1.007-.1.366.2.55.5.458.9V19c0 .4-.275.7-.55.9-.091.099-.274.099-.366.099-.183 0-.366-.1-.549-.2l-4.302-3.798H7.915c-.549 0-.915-.4-.915-1V9.007c0-.6.366-1 .915-1h3.295l4.302-3.797zm-3.386 9.994l3.112 2.699V7.107l-3.112 2.699c-.183.1-.367.2-.55.2H8.831v3.997h2.745c.183 0 .367.1.55.2z"
        clipRule="evenodd"
      />
      <Mask id="volume_svg__a" width={10} height={16} x={7} y={4} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M15.512 4.209c.275-.2.732-.3 1.007-.1.366.2.55.5.458.9V19c0 .4-.275.7-.55.9-.091.099-.274.099-.366.099-.183 0-.366-.1-.549-.2l-4.302-3.798H7.915c-.549 0-.915-.4-.915-1V9.007c0-.6.366-1 .915-1h3.295l4.302-3.797zm-3.386 9.994l3.112 2.699V7.107l-3.112 2.699c-.183.1-.367.2-.55.2H8.831v3.997h2.745c.183 0 .367.1.55.2z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#volume_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgVolume;
