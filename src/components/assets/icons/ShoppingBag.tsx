import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgShoppingBag(props: SvgProps) {
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
        d="M21.8 5.5c.1 0 .1.1.1.1.1.2.1.3.1.4v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5.6c.1 0 .1-.1.1-.1.1 0 .1-.1.1-.1l3-4c.2-.3.5-.4.8-.4h12c.3 0 .6.1.7.4l3 4c.1 0 .1.1.1.1zM17.5 3h-11L5 5h14l-1.5-2zM20 20c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7h16v13zm-8-5c2.8 0 5-2.2 5-5 0-.6-.4-1-1-1s-1 .4-1 1c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.6-.4-1-1-1s-1 .4-1 1c0 2.8 2.2 5 5 5z"
        clipRule="evenodd"
      />
      <Mask id="shopping-bag_svg__a" width={20} height={22} x={2} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.8 5.5c.1 0 .1.1.1.1.1.2.1.3.1.4v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5.6c.1 0 .1-.1.1-.1.1 0 .1-.1.1-.1l3-4c.2-.3.5-.4.8-.4h12c.3 0 .6.1.7.4l3 4c.1 0 .1.1.1.1zM17.5 3h-11L5 5h14l-1.5-2zM20 20c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7h16v13zm-8-5c2.8 0 5-2.2 5-5 0-.6-.4-1-1-1s-1 .4-1 1c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.6-.4-1-1-1s-1 .4-1 1c0 2.8 2.2 5 5 5z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#shopping-bag_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgShoppingBag;
