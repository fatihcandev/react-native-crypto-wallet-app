import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgArgentineSm(props: SvgProps) {
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
        fill="url(#argentine-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="argentine-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#argentine-sm_svg__a)">
        <Rect
          width={33.1}
          height={23.5}
          x={-4.55}
          y={0.25}
          fill="#fff"
          stroke="#F5F5F5"
          strokeWidth={0.5}
          rx={1.75}
        />
        <Mask
          id="argentine-sm_svg__b"
          width={34}
          height={24}
          x={-5}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect
            width={33.1}
            height={23.5}
            x={-4.55}
            y={0.25}
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.5}
            rx={1.75}
          />
        </Mask>
        <G mask="url(#argentine-sm_svg__b)">
          <Path
            fill="#88BBE8"
            fillRule="evenodd"
            d="M-4.8 7.8h33.6V0H-4.8v7.8zM-4.8 24h33.6v-7.8H-4.8V24z"
            clipRule="evenodd"
          />
          <Path
            fill="#F4B32E"
            stroke="#DB7A2C"
            strokeWidth={0.667}
            d="M12 14.733a2.733 2.733 0 100-5.466 2.733 2.733 0 000 5.466z"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="argentine-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#argentine-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgArgentineSm;
