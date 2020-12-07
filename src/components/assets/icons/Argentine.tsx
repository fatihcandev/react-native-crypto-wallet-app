import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgArgentine(props: SvgProps) {
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
        fill="url(#argentine_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="argentine_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#argentine_svg__a)">
        <Rect
          width={55.5}
          height={39.5}
          x={-7.75}
          y={0.25}
          fill="#fff"
          stroke="#F5F5F5"
          strokeWidth={0.5}
          rx={1.75}
        />
        <Mask id="argentine_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect
            width={55.5}
            height={39.5}
            x={-7.75}
            y={0.25}
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.5}
            rx={1.75}
          />
        </Mask>
        <G mask="url(#argentine_svg__b)">
          <Path
            fill="#88BBE8"
            fillRule="evenodd"
            d="M-8 13h56V0H-8v13zM-8 40h56V27H-8v13z"
            clipRule="evenodd"
          />
          <Path
            fill="#F4B32E"
            stroke="#DB7A2C"
            strokeWidth={0.667}
            d="M20 24.333a4.333 4.333 0 100-8.666 4.333 4.333 0 000 8.666z"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="argentine_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#argentine_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgArgentine;
