import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgAward(props: SvgProps) {
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
        d="M20 7.983C20 3.593 16.4 0 12 0S4 3.593 4 7.983c0 2.595 1.2 4.89 3.1 6.287L6 22.852c-.1.4.1.799.4.998.3.2.7.2 1.1 0l4.5-2.694 4.5 2.694c.1.1.3.1.5.1s.4-.1.5-.2c.3-.2.5-.598.4-.997l-1.1-8.483c2-1.397 3.2-3.692 3.2-6.287zm-14 0c0-3.293 2.7-5.987 6-5.987s6 2.694 6 5.987c0 3.294-2.7 5.988-6 5.988s-6-2.694-6-5.988zm6.5 11.177l3.2 1.896-.7-5.688c-.9.4-1.9.599-3 .599s-2.1-.2-3-.599l-.7 5.688 3.2-1.896c.3-.2.7-.2 1 0z"
        clipRule="evenodd"
      />
      <Mask id="award_svg__a" width={16} height={24} x={4} y={0} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M20 7.983C20 3.593 16.4 0 12 0S4 3.593 4 7.983c0 2.595 1.2 4.89 3.1 6.287L6 22.852c-.1.4.1.799.4.998.3.2.7.2 1.1 0l4.5-2.694 4.5 2.694c.1.1.3.1.5.1s.4-.1.5-.2c.3-.2.5-.598.4-.997l-1.1-8.483c2-1.397 3.2-3.692 3.2-6.287zm-14 0c0-3.293 2.7-5.987 6-5.987s6 2.694 6 5.987c0 3.294-2.7 5.988-6 5.988s-6-2.694-6-5.988zm6.5 11.177l3.2 1.896-.7-5.688c-.9.4-1.9.599-3 .599s-2.1-.2-3-.599l-.7 5.688 3.2-1.896c.3-.2.7-.2 1 0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#award_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgAward;
