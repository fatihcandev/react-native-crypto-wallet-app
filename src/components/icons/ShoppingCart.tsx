import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgShoppingCart(props: SvgProps) {
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
        d="M4.18 2H1a1 1 0 010-2h4a1 1 0 01.98.804L6.82 5H23a1 1 0 01.982 1.187l-1.601 8.398A2.995 2.995 0 0119.4 17H9.7a3 3 0 01-3-2.414L5.028 6.24a.995.995 0 01-.017-.084L4.18 2zM7 21.002c0 1.2.8 2.001 1.998 2.001 1.2 0 1.999-.8 1.999-2.001 0-1.201-.8-2.002-1.999-2.002S7 19.8 7 21.002zM18 21c0 1.2.8 2 1.998 2 1.2 0 1.999-.8 1.999-2s-.8-2-1.999-2S18 19.8 18 21zm-9.34-6.805L7.22 7h14.571l-1.373 7.203a.998.998 0 01-.999.797H9.68c-.503.01-.925-.33-1.02-.805z"
        clipRule="evenodd"
      />
      <Mask id="shopping-cart_svg__a" width={25} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4.18 2H1a1 1 0 010-2h4a1 1 0 01.98.804L6.82 5H23a1 1 0 01.982 1.187l-1.601 8.398A2.995 2.995 0 0119.4 17H9.7a3 3 0 01-3-2.414L5.028 6.24a.995.995 0 01-.017-.084L4.18 2zM7 21.002c0 1.2.8 2.001 1.998 2.001 1.2 0 1.999-.8 1.999-2.001 0-1.201-.8-2.002-1.999-2.002S7 19.8 7 21.002zM18 21c0 1.2.8 2 1.998 2 1.2 0 1.999-.8 1.999-2s-.8-2-1.999-2S18 19.8 18 21zm-9.34-6.805L7.22 7h14.571l-1.373 7.203a.998.998 0 01-.999.797H9.68c-.503.01-.925-.33-1.02-.805z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#shopping-cart_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgShoppingCart;
