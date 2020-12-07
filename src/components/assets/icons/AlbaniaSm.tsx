import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G, Rect, Defs, Pattern, Use } from 'react-native-svg';

function SvgAlbaniaSm(props: SvgProps) {
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
        fill="url(#albania-sm_svg__pattern0)"
        fillRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        clipRule="evenodd"
      />
      <Mask id="albania-sm_svg__a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#albania-sm_svg__a)">
        <Mask id="albania-sm_svg__b" width={34} height={24} x={-5} y={0} maskUnits="userSpaceOnUse">
          <Rect width={33.6} height={24} x={-4.8} fill="#fff" rx={2} />
        </Mask>
        <G mask="url(#albania-sm_svg__b)">
          <Path fill="#EE343C" d="M-4.8 0h33.6v24H-4.8z" />
          <Path
            fill="#262626"
            fillRule="evenodd"
            d="M10.331 5.507a.667.667 0 00-.848-.085l-.959.648a.667.667 0 00.072 1.148l1.767.894a.667.667 0 01.365.595v.516a.667.667 0 01-.667.667h-.746a.667.667 0 01-.3-.072l-2.568-1.3a.667.667 0 00-.776.126l-.588.596a.667.667 0 00.173 1.063l1.317.667c.453.23.493.862.072 1.147l-.1.068a.667.667 0 00.24 1.205l.927.188a.667.667 0 01.27 1.184l-.768.585a.508.508 0 00.432.897l1.47-.373a.645.645 0 01.698.98c-.282.43.026 1 .54 1h.678c.287 0 .543.187.633.46.201.611 1.069.611 1.27 0a.668.668 0 01.633-.46h.678a.645.645 0 00.54-1 .645.645 0 01.697-.98l1.47.373a.508.508 0 00.432-.897l-.768-.585a.667.667 0 01.27-1.184l.927-.188a.667.667 0 00.241-1.205l-.1-.068a.667.667 0 01.072-1.147l1.317-.667a.667.667 0 00.173-1.063l-.588-.596a.667.667 0 00-.776-.127l-2.567 1.3a.666.666 0 01-.302.073h-.746a.667.667 0 01-.666-.667v-.516c0-.251.14-.48.365-.594l1.767-.896a.666.666 0 00.072-1.147l-.96-.648a.667.667 0 00-.847.085L12.774 7.02a.667.667 0 01-.949 0l-1.494-1.514z"
            clipRule="evenodd"
          />
        </G>
      </G>
      <Defs>
        <Pattern
          id="albania-sm_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.0039)" xlinkHref="#albania-sm_svg__image0" />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAlbaniaSm;
