import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgAzerbaijan(props: SvgProps) {
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
        fill="url(#azerbaijan_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="azerbaijan_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#azerbaijan_svg__a)">
        <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        <Mask id="azerbaijan_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#azerbaijan_svg__b)">
          <Path fill="#24AAD5" fillRule="evenodd" d="M-8 13h56V0H-8v13z" clipRule="evenodd" />
          <Path fill="#21BF75" fillRule="evenodd" d="M-8 40h56V27H-8v13z" clipRule="evenodd" />
          <Path fill="#ED1845" fillRule="evenodd" d="M-8 27h56V13H-8v14z" clipRule="evenodd" />
          <G filter="url(#azerbaijan_svg__filter0_d)">
            <Path
              fill="#fff"
              fillRule="evenodd"
              d="M20 23.5c.823 0 1.587-.248 2.223-.674a3.333 3.333 0 110-6.652A4 4 0 1020 23.5zm4-4a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <Pattern
          id="azerbaijan_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#azerbaijan_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAzerbaijan;
