import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgArchive(props: SvgProps) {
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
        d="M1 2h22a1 1 0 011 1v5a1 1 0 01-1 1h-1V8a1 1 0 00-1-1h1V4H2v3h1a1 1 0 00-1 1v1H1a1 1 0 01-1-1V3a1 1 0 011-1zm3 7H2v12a1 1 0 001 1h18a1 1 0 001-1V9h-2V8a1 1 0 011-1H3a1 1 0 011 1v1zm0 0h16v11H4V9zm5 3a1 1 0 001 1h4a1 1 0 100-2h-4a1 1 0 00-1 1z"
        clipRule="evenodd"
      />
      <Mask id="archive_svg__a" width={24} height={20} x={0} y={2} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1 2h22a1 1 0 011 1v5a1 1 0 01-1 1h-1V8a1 1 0 00-1-1h1V4H2v3h1a1 1 0 00-1 1v1H1a1 1 0 01-1-1V3a1 1 0 011-1zm3 7H2v12a1 1 0 001 1h18a1 1 0 001-1V9h-2V8a1 1 0 011-1H3a1 1 0 011 1v1zm0 0h16v11H4V9zm5 3a1 1 0 001 1h4a1 1 0 100-2h-4a1 1 0 00-1 1z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#archive_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgArchive;
