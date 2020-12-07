import * as React from 'react';
import Svg, { SvgProps, Path, Mask } from 'react-native-svg';

function SvgStatusrejected(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 62"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#DF5060"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={4}
        d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M44.306 41.735c.735.734.735 1.836 0 2.571-.367.367-.734.551-1.286.551-.55 0-.918-.184-1.285-.55L32 34.57l-9.735 9.735c-.367.367-.734.551-1.285.551-.551 0-.919-.184-1.286-.55-.735-.736-.735-1.838 0-2.572L29.429 32l-9.735-9.735c-.735-.734-.735-1.837 0-2.571.735-.735 1.837-.735 2.571 0L32 29.429l9.735-9.735c.734-.735 1.837-.735 2.571 0 .735.735.735 1.837 0 2.571L34.572 32l9.734 9.735z"
        clipRule="evenodd"
      />
      <Mask
        id="status_rejected_svg__a"
        width={26}
        height={26}
        x={19}
        y={19}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M44.306 41.735c.735.734.735 1.836 0 2.571-.367.367-.734.551-1.286.551-.55 0-.918-.184-1.285-.55L32 34.57l-9.735 9.735c-.367.367-.734.551-1.285.551-.551 0-.919-.184-1.286-.55-.735-.736-.735-1.838 0-2.572L29.429 32l-9.735-9.735c-.735-.734-.735-1.837 0-2.571.735-.735 1.837-.735 2.571 0L32 29.429l9.735-9.735c.734-.735 1.837-.735 2.571 0 .735.735.735 1.837 0 2.571L34.572 32l9.734 9.735z"
          clipRule="evenodd"
        />
      </Mask>
    </Svg>
  );
}

export default SvgStatusrejected;
