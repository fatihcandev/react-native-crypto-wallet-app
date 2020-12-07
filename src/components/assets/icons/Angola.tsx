import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Mask,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Use,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgAngola(props: SvgProps) {
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
        fill="url(#angola_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="angola_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#angola_svg__a)">
        <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        <Mask id="angola_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#angola_svg__b)">
          <Path fill="url(#angola_svg__paint0_linear)" d="M-8 0h56v40H-8z" />
          <G filter="url(#angola_svg__filter0_d)">
            <Path fill="#262626" fillRule="evenodd" d="M-8 40h56V21H-8v19z" clipRule="evenodd" />
          </G>
          <G filter="url(#angola_svg__filter1_d)">
            <Path fill="#DD2137" fillRule="evenodd" d="M-8 21h56V0H-8v21z" clipRule="evenodd" />
          </G>
          <G filter="url(#angola_svg__filter2_d)">
            <Path
              fill="#F8D84B"
              fillRule="evenodd"
              d="M24.78 22.909a8.297 8.297 0 00.761-1.925c1.118-4.329-1.357-8.778-5.528-9.938-.695-.193-1.41.235-1.596.957-.186.721.226 1.463.922 1.656 2.78.773 4.43 3.74 3.685 6.625-.102.396-.244.77-.42 1.119l-4.003-2.77a1.274 1.274 0 00-1.807.376c-.399.621-.237 1.46.362 1.875l3.669 2.539a5.04 5.04 0 01-4.184.686c-.695-.193-1.41.235-1.596.956-.187.722.226 1.463.921 1.656 2.606.725 5.257-.006 7.152-1.712l1.856 1.285a1.274 1.274 0 001.807-.375c.4-.622.237-1.462-.361-1.876l-1.64-1.134zm-6.901-5.855c.72 0 1.303-.605 1.303-1.352 0-.747-.584-1.352-1.303-1.352-.72 0-1.303.605-1.303 1.352 0 .747.583 1.352 1.303 1.352z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="angola_svg__paint0_linear"
          x1={-8}
          x2={-8}
          y1={0}
          y2={40}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF323E" />
          <Stop offset={1} stopColor="#FD0D1B" />
        </LinearGradient>
        <Pattern
          id="angola_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#angola_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAngola;
