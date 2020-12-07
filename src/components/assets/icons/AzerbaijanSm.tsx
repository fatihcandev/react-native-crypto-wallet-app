import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgAzerbaijanSm(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="url(#azerbaijan-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="azerbaijan-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#azerbaijan-sm_svg__a)">
        <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        <Mask
          id="azerbaijan-sm_svg__b"
          width={34}
          height={24}
          x={-5}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#azerbaijan-sm_svg__b)">
          <Path
            fill="#24AAD5"
            fillRule="evenodd"
            d="M-4.8 7.8h33.6V0H-4.8v7.8z"
            clipRule="evenodd"
          />
          <Path
            fill="#21BF75"
            fillRule="evenodd"
            d="M-4.8 24h33.6v-7.8H-4.8V24z"
            clipRule="evenodd"
          />
          <Path
            fill="#ED1845"
            fillRule="evenodd"
            d="M-4.8 16.2h33.6V7.8H-4.8v8.4z"
            clipRule="evenodd"
          />
          <G filter="url(#azerbaijan-sm_svg__filter0_d)">
            <Path
              fill="#fff"
              fillRule="evenodd"
              d="M12 14.1c.494 0 .952-.149 1.334-.404a2 2 0 110-3.991A2.4 2.4 0 1012 14.1zm2.4-2.4a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <Pattern
          id="azerbaijan-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#azerbaijan-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAzerbaijanSm;
