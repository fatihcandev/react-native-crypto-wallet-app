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

function SvgAngolaSm(props: SvgProps) {
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
        fill="url(#angola-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="angola-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#angola-sm_svg__a)">
        <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        <Mask id="angola-sm_svg__b" width={34} height={24} x={-5} y={0} maskUnits="userSpaceOnUse">
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#angola-sm_svg__b)">
          <Path fill="url(#angola-sm_svg__paint0_linear)" d="M-4.8 0h33.6v24H-4.8z" />
          <G filter="url(#angola-sm_svg__filter0_d)">
            <Path
              fill="#262626"
              fillRule="evenodd"
              d="M-4.8 24h33.6V12.6H-4.8V24z"
              clipRule="evenodd"
            />
          </G>
          <G filter="url(#angola-sm_svg__filter1_d)">
            <Path
              fill="#DD2137"
              fillRule="evenodd"
              d="M-4.8 12.6h33.6V0H-4.8v12.6z"
              clipRule="evenodd"
            />
          </G>
          <G filter="url(#angola-sm_svg__filter2_d)">
            <Path
              fill="#F8D84B"
              fillRule="evenodd"
              d="M14.868 13.745c.195-.355.35-.741.457-1.155.67-2.597-.815-5.266-3.317-5.962a.78.78 0 00-.958.574c-.111.432.136.877.553.993 1.668.464 2.659 2.244 2.212 3.975a3.33 3.33 0 01-.253.672l-2.401-1.662a.764.764 0 00-1.084.225.83.83 0 00.216 1.126l2.202 1.523c-.717.482-1.62.659-2.51.411a.78.78 0 00-.958.574c-.112.433.136.878.553.994 1.563.435 3.154-.004 4.29-1.027l1.114.77a.765.765 0 001.085-.225.83.83 0 00-.217-1.125l-.984-.68zm-4.14-3.512c.431 0 .781-.364.781-.812 0-.448-.35-.811-.782-.811-.432 0-.782.363-.782.811 0 .448.35.812.782.812z"
              clipRule="evenodd"
            />
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="angola-sm_svg__paint0_linear"
          x1={-4.8}
          x2={-4.8}
          y1={0}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF323E" />
          <Stop offset={1} stopColor="#FD0D1B" />
        </LinearGradient>
        <Pattern
          id="angola-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#angola-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAngolaSm;
