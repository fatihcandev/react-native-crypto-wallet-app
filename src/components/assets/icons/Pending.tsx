import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPending(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="orange"
        fillRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM12.824 6.442a.593.593 0 011.1-.12.644.644 0 01.052.475l-1.6 5.833a.62.62 0 01-.18.3l-3.2 2.916a.587.587 0 01-.848-.058.648.648 0 01.056-.883l3.068-2.796 1.552-5.667z"
        clipRule="evenodd"
      />
      <Mask id="pending_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM12.824 6.442a.593.593 0 011.1-.12.644.644 0 01.052.475l-1.6 5.833a.62.62 0 01-.18.3l-3.2 2.916a.587.587 0 01-.848-.058.648.648 0 01.056-.883l3.068-2.796 1.552-5.667z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#pending_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPending;
