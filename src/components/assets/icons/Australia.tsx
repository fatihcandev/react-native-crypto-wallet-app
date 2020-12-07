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

function SvgAustralia(props: SvgProps) {
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
        fill="url(#australia_svg__pattern0)"
        fillRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        clipRule="evenodd"
      />
      <Mask id="australia_svg__a" width={40} height={40} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#australia_svg__a)">
        <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        <Mask id="australia_svg__b" width={56} height={40} x={-8} y={0} maskUnits="userSpaceOnUse">
          <Rect width={56} height={40} x={-8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#australia_svg__b)">
          <Path fill="#0A17A7" d="M-8 0h56v40H-8z" />
          <Path
            fill="#FF2E3B"
            stroke="#fff"
            strokeWidth={0.667}
            d="M-8-.333h-.927l.715.59L1 7.87v2.24l-9.19 6.329-.143.1v2.05l.505-.305 10.587-6.38h2.47l9.163 6.31a.667.667 0 00.378.118h.303c.625 0 .907-.782.425-1.18L7 10.129v-2.24l9.045-6.23a.666.666 0 00.288-.548V-.59l-.505.305L5.24 6.095H2.77l-9.249-6.37-.085-.058H-8z"
          />
          <Path
            fill="url(#australia_svg__paint0_linear)"
            fillRule="evenodd"
            d="M-8 7v5.6h9.21v7.733c0 .369.299.667.667.667h3.93a.667.667 0 00.667-.667V12.6h9.86a.667.667 0 00.666-.667V7.667A.667.667 0 0016.333 7h-9.86V0H1.212v7H-8z"
            clipRule="evenodd"
          />
          <Path
            fill="url(#australia_svg__paint1_linear)"
            fillRule="evenodd"
            d="M-8 7.714H2.667V0h2.666v7.714H16v2.572H5.333V18H2.667v-7.714H-8V7.714z"
            clipRule="evenodd"
          />
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M3.5 32.804L1.337 34l.413-2.533L0 29.674l2.418-.37L3.5 27l1.082 2.304 2.418.37-1.75 1.793L5.663 34 3.5 32.804zM32 35.414L30 36l.586-2L30 32l2 .586L34 32l-.586 2L34 36l-2-.586zM32 9.414L30 10l.586-2L30 6l2 .586L34 6l-.586 2L34 10l-2-.586zM40 17.414L38 18l.586-2L38 14l2 .586L42 14l-.586 2L42 18l-2-.586zM24 19.414L22 20l.586-2L22 16l2 .586L26 16l-.586 2L26 20l-2-.586zM36 23.707L35 24l.293-1L35 22l1 .293L37 22l-.293 1L37 24l-1-.293z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="australia_svg__paint0_linear"
          x1={-8}
          x2={-8}
          y1={0}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient
          id="australia_svg__paint1_linear"
          x1={-8}
          x2={-8}
          y1={0}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF2E3B" />
          <Stop offset={1} stopColor="#FC0D1B" />
        </LinearGradient>
        <Pattern
          id="australia_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#australia_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAustralia;
