import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgArmenia(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 40 40"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="url(#armenia_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="armenia_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#armenia_svg__a)">
        <Rect width={59} height={43} x={-9} y={-3} fill="#fff" rx={2} />
        <Mask id="armenia_svg__b" width={59} height={43} x={-9} y={-3} maskUnits="userSpaceOnUse">
          <Rect width={59} height={43} x={-9} y={-3} fill="#fff" rx={2} />
        </Mask>
        <G fillRule="evenodd" clipRule="evenodd" mask="url(#armenia_svg__b)">
          <Path fill="#1047B9" d="M-9 28h59V13H-9v15z" />
          <Path fill="#F01C31" d="M-9 13h59V0H-9v13z" />
          <Path fill="#FECB2F" d="M-9 40h59V27H-9v13z" />
        </G>
      </G>
      <Defs>
        <Pattern
          id="armenia_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#armenia_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgArmenia;
