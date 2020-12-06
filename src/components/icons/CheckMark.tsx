import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgCheckMark(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-8.031-2.554a.64.64 0 01.44-.195.64.64 0 01.47 1.1c-.843.846-1.651 1.693-2.462 2.543-.817.856-1.638 1.716-2.502 2.582a.64.64 0 01-.855.05l-2.403-1.921a.641.641 0 01.801-1.001l1.947 1.556c.695-.706 1.37-1.412 2.048-2.12.822-.861 1.648-1.724 2.516-2.594z"
        clipRule="evenodd"
      />
      <Mask id="check-mark_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-8.031-2.554a.64.64 0 01.44-.195.64.64 0 01.47 1.1c-.843.846-1.651 1.693-2.462 2.543-.817.856-1.638 1.716-2.502 2.582a.64.64 0 01-.855.05l-2.403-1.921a.641.641 0 01.801-1.001l1.947 1.556c.695-.706 1.37-1.412 2.048-2.12.822-.861 1.648-1.724 2.516-2.594z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#check-mark_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgCheckMark;
