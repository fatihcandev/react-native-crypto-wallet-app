import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgArmeniaSm(props: SvgProps) {
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
        fill="url(#armenia-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="armenia-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#armenia-sm_svg__a)">
        <Rect width={35.4} height={25.8} x={-5.4} y={-1.8} fill="#fff" rx={2} />
        <Mask
          id="armenia-sm_svg__b"
          width={36}
          height={26}
          x={-6}
          y={-2}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={35.4} height={25.8} x={-5.4} y={-1.8} fill="#fff" rx={2} />
        </Mask>
        <G fillRule="evenodd" clipRule="evenodd" mask="url(#armenia-sm_svg__b)">
          <Path fill="#1047B9" d="M-5.4 16.8H30v-9H-5.4v9z" />
          <Path fill="#F01C31" d="M-5.4 7.8H30V0H-5.4v7.8z" />
          <Path fill="#FECB2F" d="M-5.4 24H30v-7.8H-5.4V24z" />
        </G>
      </G>
      <Defs>
        <Pattern
          id="armenia-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#armenia-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgArmeniaSm;
