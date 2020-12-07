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

function SvgAustraliaSm(props: SvgProps) {
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
        fill="url(#australia-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="australia-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#australia-sm_svg__a)">
        <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        <Mask
          id="australia-sm_svg__b"
          width={34}
          height={24}
          x={-5}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#australia-sm_svg__b)">
          <Path fill="#0A17A7" d="M-4.8 0h33.6v24H-4.8z" />
          <Path
            fill="#FF2E3B"
            stroke="#fff"
            strokeWidth={0.667}
            d="M-4.8-.333h-.926l.714.59L.467 4.786v1.21L-4.99 9.754l-.144.1v1.536l.505-.305 6.32-3.809h1.405l5.448 3.753a.592.592 0 00.713-.944l-4.924-4.07V4.803l5.311-3.659a.667.667 0 00.289-.549V-.59l-.506.305-6.32 3.809H1.704L-3.811-.275l-.085-.058H-4.8z"
          />
          <Path
            fill="url(#australia-sm_svg__paint0_linear)"
            fillRule="evenodd"
            d="M-4.8 4.2v3.36H.727v4.373c0 .369.298.667.666.667h1.825a.667.667 0 00.666-.667V7.56h5.65a.667.667 0 00.666-.667V4.867a.667.667 0 00-.666-.667h-5.65V0H.727v4.2H-4.8z"
            clipRule="evenodd"
          />
          <Path
            fill="url(#australia-sm_svg__paint1_linear)"
            fillRule="evenodd"
            d="M-4.8 4.629h6.4V0h1.6V4.629h6.4V6.17H3.2V10.8H1.6V6.171h-6.4V4.63z"
            clipRule="evenodd"
          />
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M2.1 19.683L.802 20.4l.248-1.52L0 17.804l1.451-.221L2.1 16.2l.649 1.383 1.451.221-1.05 1.076.248 1.52-1.298-.717zM19.2 21.248L18 21.6l.352-1.2L18 19.2l1.2.351 1.2-.351-.351 1.2.351 1.2-1.2-.352zM19.2 5.649L18 6l.352-1.2L18 3.6l1.2.351 1.2-.351-.351 1.2L20.4 6l-1.2-.351zM24 10.449l-1.2.351.352-1.2-.352-1.2 1.2.351 1.2-.351-.351 1.2.351 1.2-1.2-.351zM14.4 11.649L13.2 12l.352-1.2-.352-1.2 1.2.351 1.2-.351-.351 1.2.351 1.2-1.2-.351zM21.6 14.224l-.6.176.176-.6-.176-.6.6.176.6-.176-.176.6.176.6-.6-.176z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="australia-sm_svg__paint0_linear"
          x1={-4.8}
          x2={-4.8}
          y1={0}
          y2={12.6}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient
          id="australia-sm_svg__paint1_linear"
          x1={-4.8}
          x2={-4.8}
          y1={0}
          y2={10.8}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF2E3B" />
          <Stop offset={1} stopColor="#FC0D1B" />
        </LinearGradient>
        <Pattern
          id="australia-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#australia-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAustraliaSm;
