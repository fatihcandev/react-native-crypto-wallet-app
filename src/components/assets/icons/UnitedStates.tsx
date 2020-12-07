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

function SvgUnitedstates(props: SvgProps) {
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
        fill="url(#united_states_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="united_states_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#united_states_svg__a)">
        <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        <Mask
          id="united_states_svg__b"
          width={56}
          height={40}
          x={-8}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#united_states_svg__b)">
          <Path
            fill="#D02F44"
            fillRule="evenodd"
            d="M48 0H-8v2.667h56V0zm0 5.333H-8V8h56V5.333zm-56 5.334h56v2.666H-8v-2.666zM48 16H-8v2.667h56V16zm-56 5.333h56V24H-8v-2.667zm56 5.334H-8v2.666h56v-2.666zM-8 32h56v2.667H-8V32zm56 5.333H-8V40h56v-2.667z"
            clipRule="evenodd"
          />
          <Path fill="#46467F" d="M-8 0h24v19H-8z" />
          <G filter="url(#united_states_svg__filter0_d)">
            <Path
              fill="url(#united_states_svg__paint0_linear)"
              fillRule="evenodd"
              d="M-2.286 4.3c0 .718-.607 1.3-1.357 1.3S-5 5.018-5 4.3c0-.718.608-1.3 1.357-1.3.75 0 1.357.582 1.357 1.3zm5.429 0c0 .718-.608 1.3-1.357 1.3-.75 0-1.357-.582-1.357-1.3 0-.718.607-1.3 1.357-1.3s1.357.582 1.357 1.3zm4.071 1.3c.75 0 1.357-.582 1.357-1.3 0-.718-.607-1.3-1.357-1.3s-1.357.582-1.357 1.3c0 .718.608 1.3 1.357 1.3zM14 4.3c0 .718-.608 1.3-1.357 1.3-.75 0-1.357-.582-1.357-1.3 0-.718.607-1.3 1.357-1.3S14 3.582 14 4.3zM-.929 8.2C-.179 8.2.43 7.618.43 6.9c0-.718-.608-1.3-1.358-1.3-.75 0-1.357.582-1.357 1.3 0 .718.608 1.3 1.357 1.3zm6.786-1.3c0 .718-.607 1.3-1.357 1.3s-1.357-.582-1.357-1.3c0-.718.607-1.3 1.357-1.3s1.357.582 1.357 1.3zM9.93 8.2c.75 0 1.357-.582 1.357-1.3 0-.718-.608-1.3-1.357-1.3-.75 0-1.358.582-1.358 1.3 0 .718.608 1.3 1.358 1.3zM14 9.5c0 .718-.608 1.3-1.357 1.3-.75 0-1.357-.582-1.357-1.3 0-.718.607-1.3 1.357-1.3S14 8.782 14 9.5zm-6.786 1.3c.75 0 1.357-.582 1.357-1.3 0-.718-.607-1.3-1.357-1.3s-1.357.582-1.357 1.3c0 .718.608 1.3 1.357 1.3zM3.143 9.5c0 .718-.608 1.3-1.357 1.3-.75 0-1.357-.582-1.357-1.3 0-.718.607-1.3 1.357-1.3s1.357.582 1.357 1.3zm-6.786 1.3c.75 0 1.357-.582 1.357-1.3 0-.718-.607-1.3-1.357-1.3S-5 8.782-5 9.5c0 .718.608 1.3 1.357 1.3zM.43 12.1c0 .718-.608 1.3-1.358 1.3-.75 0-1.357-.582-1.357-1.3 0-.718.608-1.3 1.357-1.3.75 0 1.358.582 1.358 1.3zM4.5 13.4c.75 0 1.357-.582 1.357-1.3 0-.718-.607-1.3-1.357-1.3s-1.357.582-1.357 1.3c0 .718.607 1.3 1.357 1.3zm6.786-1.3c0 .718-.608 1.3-1.357 1.3-.75 0-1.358-.582-1.358-1.3 0-.718.608-1.3 1.358-1.3.75 0 1.357.582 1.357 1.3zm1.357 3.9c.75 0 1.357-.582 1.357-1.3 0-.718-.608-1.3-1.357-1.3-.75 0-1.357.582-1.357 1.3 0 .718.607 1.3 1.357 1.3zM8.57 14.7c0 .718-.607 1.3-1.357 1.3s-1.357-.582-1.357-1.3c0-.718.608-1.3 1.357-1.3.75 0 1.357.582 1.357 1.3zM1.786 16c.75 0 1.357-.582 1.357-1.3 0-.718-.608-1.3-1.357-1.3-.75 0-1.357.582-1.357 1.3 0 .718.607 1.3 1.357 1.3zm-4.072-1.3c0 .718-.607 1.3-1.357 1.3S-5 15.418-5 14.7c0-.718.608-1.3 1.357-1.3.75 0 1.357.582 1.357 1.3z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="united_states_svg__paint0_linear"
          x1={-5}
          x2={-5}
          y1={3}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
        <Pattern
          id="united_states_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#united_states_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgUnitedstates;
