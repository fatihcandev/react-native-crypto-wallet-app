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

function SvgUnitedstatesSm(props: SvgProps) {
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
        fill="url(#united_states-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask
        id="united_states-sm_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#united_states-sm_svg__a)">
        <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        <Mask
          id="united_states-sm_svg__b"
          width={34}
          height={24}
          x={-5}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#united_states-sm_svg__b)">
          <Path
            fill="#D02F44"
            fillRule="evenodd"
            d="M28.8 0H-4.8v1.6h33.6V0zm0 3.2H-4.8v1.6h33.6V3.2zM-4.8 6.4h33.6V8H-4.8V6.4zm33.6 3.2H-4.8v1.6h33.6V9.6zm-33.6 3.2h33.6v1.6H-4.8v-1.6zM28.8 16H-4.8v1.6h33.6V16zm-33.6 3.2h33.6v1.6H-4.8v-1.6zm33.6 3.2H-4.8V24h33.6v-1.6z"
            clipRule="evenodd"
          />
          <Path fill="#46467F" d="M-4.8 0H9.6v11.4H-4.8z" />
          <G filter="url(#united_states-sm_svg__filter0_d)">
            <Path
              fill="url(#united_states-sm_svg__paint0_linear)"
              fillRule="evenodd"
              d="M-1.371 2.58c0 .43-.365.78-.815.78-.45 0-.814-.35-.814-.78 0-.43.365-.78.814-.78.45 0 .815.35.815.78zm3.257 0c0 .43-.365.78-.815.78-.45 0-.814-.35-.814-.78 0-.43.365-.78.814-.78.45 0 .815.35.815.78zm2.443.78c.45 0 .814-.35.814-.78 0-.43-.365-.78-.814-.78-.45 0-.815.35-.815.78 0 .43.365.78.815.78zM8.4 2.58c0 .43-.365.78-.814.78-.45 0-.815-.35-.815-.78 0-.43.365-.78.815-.78.45 0 .814.35.814.78zM-.557 4.92c.45 0 .814-.35.814-.78 0-.43-.364-.78-.814-.78-.45 0-.814.35-.814.78 0 .43.364.78.814.78zm4.071-.78c0 .43-.364.78-.814.78-.45 0-.814-.35-.814-.78 0-.43.364-.78.814-.78.45 0 .814.35.814.78zm2.443.78c.45 0 .814-.35.814-.78 0-.43-.364-.78-.814-.78-.45 0-.814.35-.814.78 0 .43.364.78.814.78zM8.4 5.7c0 .43-.365.78-.814.78-.45 0-.815-.35-.815-.78 0-.43.365-.78.815-.78.45 0 .814.35.814.78zm-4.071.78c.45 0 .814-.35.814-.78 0-.43-.365-.78-.814-.78-.45 0-.815.35-.815.78 0 .43.365.78.815.78zM1.886 5.7c0 .43-.365.78-.815.78-.45 0-.814-.35-.814-.78 0-.43.365-.78.814-.78.45 0 .815.35.815.78zm-4.072.78c.45 0 .815-.35.815-.78 0-.43-.365-.78-.815-.78-.45 0-.814.35-.814.78 0 .43.365.78.814.78zm2.443.78c0 .43-.364.78-.814.78-.45 0-.814-.35-.814-.78 0-.43.364-.78.814-.78.45 0 .814.35.814.78zm2.443.78c.45 0 .814-.35.814-.78 0-.43-.364-.78-.814-.78-.45 0-.814.35-.814.78 0 .43.364.78.814.78zm4.071-.78c0 .43-.364.78-.814.78-.45 0-.814-.35-.814-.78 0-.43.364-.78.814-.78.45 0 .814.35.814.78zm.815 2.34c.45 0 .814-.35.814-.78 0-.43-.365-.78-.814-.78-.45 0-.815.35-.815.78 0 .43.365.78.815.78zm-2.443-.78c0 .43-.365.78-.814.78-.45 0-.815-.35-.815-.78 0-.43.365-.78.815-.78.45 0 .814.35.814.78zM1.07 9.6c.45 0 .815-.35.815-.78 0-.43-.365-.78-.815-.78-.45 0-.814.35-.814.78 0 .43.365.78.814.78zm-2.442-.78c0 .43-.365.78-.815.78-.45 0-.814-.35-.814-.78 0-.43.365-.78.814-.78.45 0 .815.35.815.78z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="united_states-sm_svg__paint0_linear"
          x1={-3}
          x2={-3}
          y1={1.8}
          y2={9.6}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
        <Pattern
          id="united_states-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#united_states-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgUnitedstatesSm;
